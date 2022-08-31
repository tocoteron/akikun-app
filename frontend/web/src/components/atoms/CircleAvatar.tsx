import React from 'react'
import clsx from 'clsx'
import { Size } from '../styles/size'

interface CircleAvatarProps {
  source: string
  size?: Size
}

const CircleAvatar: React.FC<CircleAvatarProps> = ({ source, size = 'm' }) => {
  const className = clsx('rounded-full', {
    'h-16 w-16': size === 's',
    'h-24 w-24': size === 'm',
    'h-32 w-32': size === 'l',
  })

  return <img className={className} src={source} />
}

export default CircleAvatar
