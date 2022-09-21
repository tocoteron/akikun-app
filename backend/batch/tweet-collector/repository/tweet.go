package repository

import (
	"context"

	"cloud.google.com/go/firestore"
	"github.com/tocoteron/akikun-app/backend/batch/tweet-collector/model"
)

type TweetRepository interface {
	Save([]*model.Tweet) error
	List() ([]*model.Tweet, error)
}

type FirestoreTweetRepository struct {
	projectID string
	path      string
}

func NewFirestoreTweetRepository(projectID *string, path string) *FirestoreTweetRepository {
	if projectID == nil {
		return &FirestoreTweetRepository{firestore.DetectProjectID, path}
	}
	return &FirestoreTweetRepository{*projectID, path}
}

func (r *FirestoreTweetRepository) Save(tweets []*model.Tweet) error {
	ctx := context.Background()

	// Create firestore client
	client, err := firestore.NewClient(ctx, r.projectID)
	if err != nil {
		return err
	}
	defer client.Close()

	// Get reference to tweets collection
	tweetsRef := client.Collection(r.path)

	// Process batch to save tweets
	b := client.Batch()
	for _, tweet := range tweets {
		doc := tweetsRef.Doc(tweet.ID)
		b.Set(doc, tweet)
	}
	b.Commit(ctx)

	return nil
}

func (r *FirestoreTweetRepository) List() ([]*model.Tweet, error) {
	ctx := context.Background()

	// Create firestore client
	client, err := firestore.NewClient(ctx, r.projectID)
	if err != nil {
		return []*model.Tweet{}, nil
	}
	defer client.Close()

	// Get all tweet documents
	docs, err := client.Collection(r.path).Documents(ctx).GetAll()
	if err != nil {
		return []*model.Tweet{}, nil
	}

	// Convert the documents to tweet models
	tweets := []*model.Tweet{}
	for _, doc := range docs {
		tweet := &model.Tweet{}
		doc.DataTo(tweet)
		tweets = append(tweets, tweet)
	}

	return tweets, nil
}
