import React from 'react'
import clsx from 'clsx'
import {
  getStackAlignClassName,
  getStackGapXClassName,
  StackAlign,
} from '../styles/stack'
import { Space } from '../styles/size'

interface HStackProps {
  align?: StackAlign
  gap?: Space
  children: React.ReactNode
}

const HStack: React.FC<HStackProps> = ({
  align = 'start',
  gap = 'none',
  children,
}) => {
  const className = clsx(
    'flex flex-row',
    getStackAlignClassName(align),
    getStackGapXClassName(gap)
  )
  return <div className={className}>{children}</div>
}

export default HStack
