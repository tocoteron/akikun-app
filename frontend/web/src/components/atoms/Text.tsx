import React from 'react'
import clsx from 'clsx'

interface TextProps {
  text: string
  size?: 'small' | 'medium' | 'large'
}

const Text: React.FC<TextProps> = ({ text, size = 'medium' }) => {
  const className = clsx({
    'text-sm': size === 'small',
    'text-base': size === 'medium',
    'text-lg': size === 'large',
  })
  return <p className={className}>{text}</p>
}

export default Text
