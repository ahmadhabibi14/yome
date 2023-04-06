package controller

import (
	"log"
	"net/http"
	"yome-server/db"
	"yome-server/models"

	"github.com/gin-gonic/gin"
)

func GetAllSong(c *gin.Context) {
	var allSongs []models.Music
	dBase := db.Connect()
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
