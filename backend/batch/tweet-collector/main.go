package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/labstack/gommon/log"
	"github.com/tocoteron/akikun-app/backend/batch/tweet-collector/api"
	"github.com/tocoteron/akikun-app/backend/batch/tweet-collector/repository"
)

const defaultPort = "8080"

func main() {
	// Environment variables
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	token := os.Getenv("TWITTER_API_BEARER_TOKEN")
	if token == "" {
		fmt.Println("Set TWITTER_API_BEARER_TOKEN variable")
		return
	}

	// Twitter client
	twitter, err := api.NewTwitterClient(token)
	if err != nil {
		log.Error("Failed to init twitter client", err)
	}

	// Tweets repository
	repo := repository.NewFirestoreTweetRepository(nil, "akikun/twitter/tweets")

	// Akikun info
	akikunIDList := []string{"958675678689243137"}

	// Create server
	e := echo.New()
	e.HideBanner = true

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.POST("/tweets", collectAkikunTweets(twitter, repo, akikunIDList))
	e.GET("/tweets", getAkikunTweets(repo))

	// Start server
	e.Logger.Fatal(e.Start(":" + port))
}

func collectAkikunTweets(twitter *api.TwitterClient, repo repository.TweetRepository, ids []string) echo.HandlerFunc {
	return func(c echo.Context) error {
		// Get tweets of target users
		tweets, err := twitter.GetUsersTimeline(ids)
		if err != nil {
			return err
		}

		// Save tweets
		if err := repo.Save(tweets); err != nil {
			return err
		}

		// Build response (tweet ids)
		res := []string{}
		for _, t := range tweets {
			res = append(res, t.ID)
		}

		return c.JSON(http.StatusOK, res)
	}
}

func getAkikunTweets(repo repository.TweetRepository) echo.HandlerFunc {
	return func(c echo.Context) error {
		tweets, err := repo.List()
		if err != nil {
			return err
		}
		return c.JSON(http.StatusOK, tweets)
	}
}
