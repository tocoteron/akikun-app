package repository

import (
	"context"
	"time"

	"cloud.google.com/go/firestore"
	"github.com/tocoteron/akikun-app/backend/api/web/graph/model"
)

type TweetRepository interface {
	List() ([]*model.Tweet, error)
}

type FirestoreTweetRepository struct {
	projectID string
	path      string
}

func NewFirestoreTweetRepository(projectID *string, path string) TweetRepository {
	if projectID == nil {
		return &FirestoreTweetRepository{firestore.DetectProjectID, path}
	}
	return &FirestoreTweetRepository{*projectID, path}
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
		tweet := &firestoreTweet{}
		doc.DataTo(tweet)
		tweets = append(tweets, tweet.toModel())
	}

	return tweets, nil
}

type firestoreTweet struct {
	ID        string    `firestore:"id"`
	AuthorID  string    `firestore:"author_id"`
	Text      string    `firestore:"text"`
	CreatedAt time.Time `firestore:"created_at"`
}

func (t *firestoreTweet) toModel() *model.Tweet {
	return &model.Tweet{
		ID:        t.ID,
		AuthorID:  t.AuthorID,
		Text:      t.Text,
		CreatedAt: t.CreatedAt.Format(time.RFC3339),
	}
}
