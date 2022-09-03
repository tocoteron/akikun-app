import clsx from 'clsx'
import { Space } from '~/components/styles/space'

// Compatible with https://tailwindcss.com/docs/align-items
export type StackAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch'

export const getStackAlignClassName = (align: StackAlign): string => {
  return clsx({
    'items-start': align === 'start',
    'items-end': align === 'end',
    'items-center': align === 'center',
    'items-baseline': align === 'baseline',
    'items-stretch': align === 'stretch',
  })
}

export const getStackGapClassName = (gap: Space): string => {
  return clsx({
    'gap-0': gap === 'none',
    'gap-1': gap === 's',
    'gap-2': gap === 'm',
    'gap-4': gap === 'l',
  })
}

export const getStackGapXClassName = (gap: Space): string => {
  return clsx({
    'gap-x-0': gap === 'none',
    'gap-x-1': gap === 's',
    'gap-x-2': gap === 'm',
    'gap-x-4': gap === 'l',
  })
}

export const getStackGapYClassName = (gap: Space): string => {
  return clsx({
    'gap-y-0': gap === 'none',
    'gap-y-1': gap === 's',
    'gap-y-2': gap === 'm',
    'gap-y-4': gap === 'l',
  })
}
