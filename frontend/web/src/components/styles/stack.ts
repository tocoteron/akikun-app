import clsx from 'clsx'

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

// Compatible with https://tailwindcss.com/docs/gap
export type StackGap = 'none' | 'small' | 'medium' | 'large'

export const getStackGapClassName = (gap: StackGap): string => {
  return clsx({
    'gap-0': gap === 'none',
    'gap-1': gap === 'small',
    'gap-2': gap === 'medium',
    'gap-4': gap === 'large',
  })
}

export const getStackGapXClassName = (gap: StackGap): string => {
  return clsx({
    'gap-x-0': gap === 'none',
    'gap-x-1': gap === 'small',
    'gap-x-2': gap === 'medium',
    'gap-x-4': gap === 'large',
  })
}

export const getStackGapYClassName = (gap: StackGap): string => {
  return clsx({
    'gap-y-0': gap === 'none',
    'gap-y-1': gap === 'small',
    'gap-y-2': gap === 'medium',
    'gap-y-4': gap === 'large',
  })
}
