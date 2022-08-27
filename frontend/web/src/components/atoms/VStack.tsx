import React from 'react'
import clsx from 'clsx'
import {
  getStackAlignClassName,
  getStackGapYClassName,
  StackAlign,
  StackGap,
} from '../styles/stack'

interface VStackProps {
  align?: StackAlign
  gap?: StackGap
  children: React.ReactNode
}

const VStack: React.FC<VStackProps> = ({
  align = 'start',
  gap = 'none',
  children,
}) => {
  const className = clsx(
    'flex flex-col',
    getStackAlignClassName(align),
    getStackGapYClassName(gap)
  )
  return <div className={className}>{children}</div>
}

export default VStack
