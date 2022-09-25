import React, { useState } from 'react'
import SearchTemplate from '~/components/templates/SearchTemplate'
import { useSearchTweetsQuery } from '~/generated/graphql'
import { akikun } from '~/mockdata/twitter'

const TopPage: React.FC = () => {
  const [searchWord, setSearchWord] = useState('')
  const [result, reexecuteQuery] = useSearchTweetsQuery()
  const { data, error } = result

  if (error != null) {
    throw error
  }

  const tweets =
    data?.tweets
      .map(t => ({
        id: t.id,
        author: {
          icon: akikun.icon,
          userName: akikun.userName,
          displayName: akikun.displayName,
        },
        content: t.text,
        date: t.createdAt,
      }))
      .filter(t => t.content.includes(searchWord)) ?? []

  const search = (text: string): void => {
    setSearchWord(text)
    reexecuteQuery()
  }

  return <SearchTemplate tweets={tweets} onSubmit={search} />
}

export default TopPage
