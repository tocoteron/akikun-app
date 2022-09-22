package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/tocoteron/akikun-app/backend/api/web/graph/generated"
	"github.com/tocoteron/akikun-app/backend/api/web/graph/model"
)

// Tweets is the resolver for the tweets field.
func (r *queryResolver) Tweets(ctx context.Context) ([]*model.Tweet, error) {
	panic(fmt.Errorf("not implemented: Tweets - tweets"))
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
