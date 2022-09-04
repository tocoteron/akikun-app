import { useState } from 'react'
import SearchTemplate from '~/components/templates/SearchTemplate'
import { tweets } from '~/mockdata/twitter'

const akikunTweets = tweets.map(tweet => ({
  ...tweet,
}))

const TopPage: React.FC = () => {
  const [tweets, setTweets] = useState(akikunTweets)

  const search = (text: string): void => {
    setTweets(akikunTweets.filter(tweet => tweet.content.includes(text)))
  }

  return <SearchTemplate tweets={tweets} onSubmit={search} />
}

export default TopPage
