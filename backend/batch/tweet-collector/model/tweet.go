package model

import "time"

type Tweet struct {
	ID        string    `json:"id" firestore:"id"`
	AuthorId  string    `json:"authorId" firestore:"author_id"`
	Text      string    `json:"text" firestore:"text"`
	CreatedAt time.Time `json:"createdAt" firestore:"created_at"`
}
