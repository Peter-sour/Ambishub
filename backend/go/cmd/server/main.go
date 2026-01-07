package main

import (
	"fmt"
	"net/http"
	"github.com/Peter-sour/Ambishub/backend/go/internal/routes"
)

func main() {
	// 1. Inisialisasi Routes
	routes.SetupRoutes()

	// 2. Tentukan Port
	port := ":8080"
	fmt.Printf("✅ Backend Ambishub Running di http://localhost%s\n", port)

	// 3. Jalankan Server dengan error handling
	err := http.ListenAndServe(port, nil)
	if err != nil {
		fmt.Printf("❌ Gagal menjalankan server: %v\n", err)
	}
}