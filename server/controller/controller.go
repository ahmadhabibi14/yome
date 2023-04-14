package controller

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
	"yome-server/config"
	"yome-server/models"

	"github.com/gin-gonic/gin"
)

func GetAllSong(c *gin.Context) {
	var allSongs []models.Music
	dBase := config.ConnectDB()
	rows, err := dBase.Query("select * from song")
	if err != nil {
		log.Printf("Error Query to database :: %v\n", err.Error())
	}
	defer rows.Close()

	for rows.Next() {
		var each = models.Music{}
		var err = rows.Scan(&each.Id, &each.Title, &each.Artist, &each.Album, &each.Track)
		if err != nil {
			log.Printf("Error scan database :: %v\n", err.Error())
		}
		allSongs = append(allSongs, each)
	}
	c.Header("Content-Type", "application/json")
	c.JSON(http.StatusOK, allSongs)
}

func AddSong(c *gin.Context) {
	addSong := models.Music{}
	if err := c.BindJSON(&addSong); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	dbase := config.ConnectDB()
	intNum, err := strconv.Atoi(addSong.Track)
	if err != nil {
		log.Printf("Eror :: %v\n", err)
	}
	_, err = dbase.Exec(
		"INSERT INTO `song`(`id`, `title`, `artist`, `album`, `track`) VALUES (?, ?, ?, ?, ?)",
		addSong.Id, addSong.Title, addSong.Artist, addSong.Album, intNum,
	)
	defer dbase.Close()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		log.Println(err.Error())
	}
	c.JSON(http.StatusOK, gin.H{"message": "Song added"})
}

func DeleteSong(c *gin.Context) {
	fmt.Println("Delete song")
}
