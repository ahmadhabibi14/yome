package models

type Music struct {
	Id     string `json:"id"`
	Title  string `json:"title"`
	Artist string `json:"artist"`
	Album  string `json:"album"`
	Track  int    `json:"track"`
}
