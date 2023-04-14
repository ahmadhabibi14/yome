package main

import (
	"log"
	"yome-server/controller"
	"yome-server/middlewares"

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
	r.Use(middlewares.CORSMiddleware())
	r.Use(middlewares.SessionMiddleware())

	public := r.Group("/auth")
	public.POST("/register", controller.Register)
	public.POST("/login", controller.Login)
	r.GET("/getAllSong", controller.GetAllSong)
	r.POST("/addSong", controller.AddSong)
	r.GET("/deleteSong", controller.DeleteSong)
	r.Use(gin.Logger())
	r.Run(":8080")
}
