package resolver

import "github.com/tocoteron/akikun-app/backend/api/web/repository"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

//go:generate go run github.com/99designs/gqlgen generate

type Resolver struct {
	tweetRepo repository.TweetRepository
}

func NewResolver(tweetRepo repository.TweetRepository) *Resolver {
	return &Resolver{tweetRepo}
}
