import React from 'react'
import clsx from 'clsx'

interface CircleAvatarProps {
  source: string
  size?: 'small' | 'medium' | 'large'
}

const CircleAvatar: React.FC<CircleAvatarProps> = ({
  source,
  size = 'medium',
}) => {
  const className = clsx('rounded-full', {
    'h-16 w-16': size === 'small',
    'h-24 w-24': size === 'medium',
    'h-32 w-32': size === 'large',
  })

  return <img className={className} src={source} />
}

export default CircleAvatar
