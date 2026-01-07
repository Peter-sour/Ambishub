package routes

import (
	"net/http"
	"github.com/Peter-sour/Ambishub/backend/go/internal/handlers"
)

// SetupRoutes mendaftarkan semua endpoint yang ada
func SetupRoutes() {
	// Di Node.js ini seperti app.get()
	http.HandleFunc("/api/users", handlers.GetUser)
	http.HandleFunc("/api/users/create", handlers.CreateUser)
}