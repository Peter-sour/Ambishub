package handlers

import (
	"encoding/json"
	"net/http"
)

// Response adalah struktur standar untuk kirim JSON
type Response struct {
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

// GetUser menangani request ambil data user
func GetUser(w http.ResponseWriter, r *http.Request) {
	// Set header agar browser tahu ini adalah JSON
	w.Header().Set("Content-Type", "application/json")
	
	res := Response{
		Message: "Success",
		Data:    map[string]string{"username": "Peter-sour", "role": "Fullstack"},
	}

	json.NewEncoder(w).Encode(res)
}

// CreateUser menangani request simpan data
func CreateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	res := Response{
		Message: "User berhasil dibuat!",
		Data:    nil,
	}

	w.WriteHeader(http.StatusCreated) // Status 201
	json.NewEncoder(w).Encode(res)
}