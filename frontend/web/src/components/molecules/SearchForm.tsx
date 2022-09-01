import React, { useState } from 'react'
import HStack from '../atoms/HStack'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

interface SearchFormProps {
  onSubmit: (value: string) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('')

  const onClick = (): void => onSubmit(searchText)

  return (
    <HStack align="center" gap="m">
      <Input type="search" value={searchText} onChange={setSearchText} />
      <Button label="検索" onClick={onClick} />
    </HStack>
  )
}

export default SearchForm
