package model

import "time"

type Tweet struct {
	ID        string    `json:"id" firestore:"id"`
	AuthorId  string    `json:"authorId" firestore:"authorId"`
	Text      string    `json:"text" firestore:"text"`
	CreatedAt time.Time `json:"createdAt" firestore:"createdAt"`
}
