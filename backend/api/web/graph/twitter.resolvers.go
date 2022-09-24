package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/tocoteron/akikun-app/backend/api/web/graph/model"
)

// Tweets is the resolver for the tweets field.
func (r *queryResolver) Tweets(ctx context.Context) ([]*model.Tweet, error) {
	return r.tweetRepo.List()
}
