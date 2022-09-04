import React, { useState } from 'react'
import HStack from '~/components/atoms/HStack'
import Input from '~/components/atoms/Input'
import Button from '~/components/atoms/Button'

interface SearchFormProps {
  onSubmit: (value: string) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('')

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onSubmit(searchText)
  }

  const onClickSearch = (): void => onSubmit(searchText)

  return (
    <form onSubmit={onSubmitForm}>
      <HStack align="center" gap="m">
        <Input type="search" value={searchText} onChange={setSearchText} />
        <Button label="検索" onClick={onClickSearch} />
      </HStack>
    </form>
  )
}

export default SearchForm
