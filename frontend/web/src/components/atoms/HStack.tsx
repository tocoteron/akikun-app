import React from 'react'
import clsx from 'clsx'
import {
  getStackAlignClassName,
  getStackGapXClassName,
  StackAlign,
  StackGap,
} from '../styles/stack'

interface HStackProps {
  align?: StackAlign
  gap?: StackGap
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
