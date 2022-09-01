import React from 'react'

interface InputProps {
  type?: 'text' | 'search'
  value: string
  onChange?: (value: string) => void
}

const Input: React.FC<InputProps> = ({ type = 'text', value, onChange }) => {
  const _onChange =
    onChange !== undefined
      ? (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)
      : undefined

  return (
    <input
      className="p-2 border rounded"
      type={type}
      value={value}
      onChange={_onChange}
    />
  )
}

export default Input
