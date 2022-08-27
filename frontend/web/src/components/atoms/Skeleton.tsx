import React from 'react'

interface SkeletonProps {
  children?: React.ReactNode
}

const Skeleton: React.FC<SkeletonProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center p-2 rounded border-2 border-dashed">
      {children}
    </div>
  )
}

export default Skeleton
