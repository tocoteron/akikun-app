package model

type Tweet struct {
	ID        string `json:"id"`
	AuthorID  string `json:"authorId"`
	Text      string `json:"text"`
	CreatedAt string `json:"createdAt"`
}

type TwitterUser struct {
	ID       string  `json:"id"`
	Username *string `json:"username"`
	Name     *string `json:"name"`
}
