package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/tocoteron/akikun-app/backend/api/web/graph"
	"github.com/tocoteron/akikun-app/backend/api/web/graph/generated"
	"github.com/tocoteron/akikun-app/backend/api/web/repository"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	// Repositories
	tweetRepo := repository.NewFirestoreTweetRepository(nil, "akikun/twitter/tweets")

	// Root resolver
	resolver := graph.NewResolver(tweetRepo)

	// Server
	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: resolver}))

	// Routes
	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("Listen :%s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
