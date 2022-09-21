package api

import (
	"context"

	"github.com/michimani/gotwi"
	"github.com/michimani/gotwi/fields"
	"github.com/michimani/gotwi/tweet/timeline"
	"github.com/michimani/gotwi/tweet/timeline/types"
	"github.com/tocoteron/akikun-app/backend/batch/tweet-collector/model"
)

type TwitterAPIV2 interface {
	GetUserTimeline(id string) ([]*model.Tweet, error)
	GetUsersTimeline(ids []string) ([]*model.Tweet, error)
}

type TwitterClient struct {
	Client *gotwi.Client
}

func NewTwitterClient(token string) (*TwitterClient, error) {
	client, err := gotwi.NewClientWithAccessToken(&gotwi.NewClientWithAccessTokenInput{
		AccessToken: token,
	})
	if err != nil {
		return nil, err
	}

	return &TwitterClient{client}, nil
}

func (c *TwitterClient) GetUserTimeline(id string) ([]*model.Tweet, error) {
	res, err := timeline.ListTweets(context.Background(), c.Client, &types.ListTweetsInput{
		ID: id,
		Exclude: fields.ExcludeList{
			fields.ExcludeRetweets,
		},
		TweetFields: fields.TweetFieldList{
			fields.TweetFieldID,
			fields.TweetFieldAuthorID,
			fields.TweetFieldText,
			fields.TweetFieldCreatedAt,
		},
		MaxResults: types.ListMaxResults(100),
	})
	if err != nil {
		return nil, err
	}

	tweets := []*model.Tweet{}
	for _, i := range res.Data {
		tweets = append(tweets, &model.Tweet{
			ID:        *i.ID,
			AuthorId:  *i.AuthorID,
			Text:      *i.Text,
			CreatedAt: *i.CreatedAt,
		})
	}

	return tweets, nil
}

func (c *TwitterClient) GetUsersTimeline(ids []string) ([]*model.Tweet, error) {
	tweets := []*model.Tweet{}
	for _, id := range ids {
		ts, err := c.GetUserTimeline(id)
		if err != nil {
			return []*model.Tweet{}, err
		}
		tweets = append(tweets, ts...)
	}

	return tweets, nil
}
