import React from 'react'
import { createClient, Provider } from 'urql'

const client = createClient({
  url: 'http://localhost:8080/graphql',
  suspense: true,
})

interface Props {
  children: React.ReactElement
}

export const APIProvider: React.FC<Props> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>
}
