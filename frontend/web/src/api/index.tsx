import React from 'react'
import { createClient, Provider } from 'urql'

const client = createClient({
  url: import.meta.env.VITE_API_ENDPOINT,
  suspense: true,
})

interface Props {
  children: React.ReactElement
}

export const APIProvider: React.FC<Props> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>
}
