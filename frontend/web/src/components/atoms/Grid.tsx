import React from 'react'
import clsx from 'clsx'
import { Quantity } from '../styles/quantity'
import { Space } from '../styles/space'

interface GridProps {
  quantity?: Quantity
  gap?: Space
  children: React.ReactNode
}

const Grid: React.FC<GridProps> = ({
  quantity = 'several',
  gap = 'none',
  children,
}) => {
  const className = clsx(
    'grid',
    {
      'grid-cols-1 md:grid-cols-2 lg:grid-cols-2': quantity === 'few',
      'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': quantity === 'several',
      'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': quantity === 'many',
    },
    {
      'gap-0': gap === 'none',
      'gap-1': gap === 's',
      'gap-2': gap === 'm',
      'gap-4': gap === 'l',
    }
  )
  return <div className={className}>{children}</div>
}

export default Grid
