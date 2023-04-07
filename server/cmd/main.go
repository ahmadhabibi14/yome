package main

import (
	"log"
	"yome-server/controller"
	"yome-server/middleware"

	// "github.com/gin-contrib/cors"
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
	r := gin.New()
	r.Use(middleware.CORSMiddleware())
	r.GET("/getAllSong", controller.GetAllSong)
	r.POST("/addSong", controller.AddSong)
	r.Use(gin.Logger())
	r.Run(":8080")
}
