package main

import (
	"log"
	"yome-server/controller"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func init() {
	// Load .env file
	err := godotenv.Load()
	if err != nil {
		log.Printf("Error loading .env file :: %v\n", err.Error())
	}
}

func main() {
	r := gin.Default()
	r.GET("/getAllSong", controller.GetAllSong)
	r.Run(":8080")
}
