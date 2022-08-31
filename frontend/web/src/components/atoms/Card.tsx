import React from 'react'

interface CardProps {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="p-2 rounded border">{children}</div>
}

export default Card
