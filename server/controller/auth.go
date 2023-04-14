package controller

import (
	"log"
	"net/http"
	"yome-server/config"
	"yome-server/models"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

type AuthInput struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type Claims struct {
	Username string `json:"username"`
	jwt.RegisteredClaims
}

func Register(c *gin.Context) {
	db := config.ConnectDB()
	var input AuthInput

	// Convert request body to struct
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// Turn password into hash
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	if err != nil {
		log.Println("Error hashing password ::", err)
	} else {
		input.Password = string(hashedPassword)
	}
	// Use struct for query value to database
	_, err = db.Exec("INSERT INTO users (username, password) VALUES (?, ?)", input.Username, input.Password)
	if err != nil {
		log.Println("Error Query to database ::", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	} else {
		log.Println("Success register user ::", input.Username)
	}
	defer db.Close()
	c.JSON(http.StatusOK, gin.H{"message": "Register success !!"})
}

func Login(c *gin.Context) {
	var user models.User
	session := sessions.Default(c)
	var input AuthInput
	// Convert request body to struct
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	message, err := LoginCheck(input.Username, input.Password)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid username or password"})
	}
	session.Set("loggedIn", true)
	session.Set("username", user.Username)
	session.Save()
	c.JSON(http.StatusOK, gin.H{"message": message})
}

func LoginCheck(username, password string) (string, error) {
	db := config.ConnectDB()
	user := models.User{}
	var err error

	// Check if username is exist
	err = db.QueryRow("SELECT username, password FROM users WHERE username = ?", username).Scan(&user.Username, &user.Password)
	if err != nil {
		return "", err
	}
	defer db.Close()
	// Check if password is exist
	err = VerifyPassword(password, user.Password)
	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		return "", nil
	}

	message := "Sucess login !"
	return message, nil
}

func VerifyPassword(password, hashedPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
}
