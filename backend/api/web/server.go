package main

import (
	"fmt"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/tocoteron/akikun-app/backend/api/web/graph/generated"
	"github.com/tocoteron/akikun-app/backend/api/web/graph/resolver"
	"github.com/tocoteron/akikun-app/backend/api/web/repository"
)

// Get environment var or default value
func getEnvOrDefault(key string, defaultValue string) string {
	if val, ok := os.LookupEnv(key); ok {
		return val
	}
	return defaultValue
}

// Get environment var or panic program
func getEnvOrPanic(key string) string {
	if val, ok := os.LookupEnv(key); ok {
		return val
	}
	panic(fmt.Sprintf("%s is not set", key))
}

func main() {
	// Get env vars
	port := getEnvOrDefault("PORT", "8080")

	// Create server
	e := echo.New()
	e.HideBanner = true

	// Set middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	// Set GraphQL routes
	e.POST("/graphql", graphqlHandler())
	e.POST("/playground", graphqlPlaygroundHandler("/graphql"))

	// Start server
	serverPort := fmt.Sprintf(":%s", port)
	e.Logger.Fatal(e.Start(serverPort))
}

// GraphQL
func graphqlHandler() echo.HandlerFunc {
	tweetRepo := repository.NewFirestoreTweetRepository(nil, "akikun/twitter/tweets")
	resolver := resolver.NewResolver(tweetRepo)
	h := handler.NewDefaultServer(
		generated.NewExecutableSchema(
			generated.Config{Resolvers: resolver},
		),
	)
	return echo.WrapHandler(h)
}

func graphqlPlaygroundHandler(graphqlPath string) echo.HandlerFunc {
	h := playground.Handler("GraphQL Playground", graphqlPath)
	return echo.WrapHandler(h)
}
