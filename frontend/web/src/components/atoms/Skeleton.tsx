import React from 'react'

interface SkeletonProps {
  children: React.ReactNode
}

const Skeleton: React.FC<SkeletonProps> = ({ children }) => {
  return <div className="bg-gray-200 animate-pulse">{children}</div>
}

export default Skeleton
