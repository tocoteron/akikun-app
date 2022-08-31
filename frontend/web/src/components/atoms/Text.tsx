import React from 'react'
import clsx from 'clsx'
import { Size } from '../styles/size'

interface TextProps {
  text: string
  size?: Size
}

const Text: React.FC<TextProps> = ({ text, size = 'm' }) => {
  const className = clsx('whitespace-pre-line', {
    'text-sm': size === 's',
    'text-base': size === 'm',
    'text-lg': size === 'l',
  })
  return <p className={className}>{text}</p>
}

export default Text
