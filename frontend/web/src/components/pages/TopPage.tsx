import { useState } from 'react'
import SearchTemplate from '../templates/SearchTemplate'
import { akikun, tweets } from '../../mockdata/twitter'

const akikunTweets = tweets.map(tweet => ({
  author: {
    icon: akikun.icon,
    displayName: akikun.displayName,
    userName: akikun.userName,
  },
  content: tweet.content,
  date: tweet.date,
}))

const TopPage: React.FC = () => {
  const [tweets, setTweets] = useState(akikunTweets)

  const search = (text: string): void => {
    setTweets(akikunTweets.filter(tweet => tweet.content.includes(text)))
  }

  return <SearchTemplate tweets={tweets} onSubmit={search} />
}

export default TopPage
