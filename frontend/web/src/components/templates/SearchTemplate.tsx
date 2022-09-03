import React from 'react'
import Grid from '../atoms/Grid'
import VStack from '../atoms/VStack'
import SearchForm from '../molecules/SearchForm'
import TwitterCard from '../organisms/TwitterCard'

interface TweetAuthor {
  icon: string
  userName: string
  displayName: string
}

interface Tweet {
  author: TweetAuthor
  content: string
  date: string
}

interface SearchTemplateProps {
  tweets: Tweet[]
  onSubmit: (value: string) => void
}

const SearchTemplate: React.FC<SearchTemplateProps> = ({
  tweets,
  onSubmit,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-4/5">
        <VStack align="center" gap="m">
          <SearchForm onSubmit={onSubmit} />
          <Grid quantity="many" gap="m">
            {tweets.map(tweet => (
              <TwitterCard
                key={tweet.date}
                icon={tweet.author.icon}
                displayName={tweet.author.displayName}
                userName={tweet.author.userName}
                content={tweet.content}
                date={tweet.date}
              />
            ))}
          </Grid>
        </VStack>
      </div>
    </div>
  )
}

export default SearchTemplate
