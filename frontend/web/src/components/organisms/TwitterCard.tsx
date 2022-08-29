import React from 'react'
import TwitterUser from '../molecules/TwitterUser'
import Text from '../atoms/Text'
import VStack from '../atoms/VStack'

interface TwitterCardProps {
  icon: string
  userName: string
  displayName: string
  content: string
  date: string
}

const TwitterCard: React.FC<TwitterCardProps> = ({
  icon,
  displayName,
  userName,
  content,
  date,
}) => {
  return (
    <VStack gap="medium">
      <TwitterUser icon={icon} displayName={displayName} userName={userName} />
      <Text text={content} />
      <Text text={date} />
    </VStack>
  )
}

export default TwitterCard
