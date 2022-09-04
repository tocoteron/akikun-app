import React from 'react'
import TwitterUser from '~/components/molecules/TwitterUser'
import Text from '~/components/atoms/Text'
import VStack from '~/components/atoms/VStack'
import Card from '~/components/atoms/Card'

interface TwitterCardProps {
  icon: string
  displayName: string
  userName: string
  content: string
  date: string
}

const TweetCard: React.FC<TwitterCardProps> = ({
  icon,
  displayName,
  userName,
  content,
  date,
}) => {
  return (
    <Card>
      <VStack gap="m">
        <TwitterUser
          icon={icon}
          displayName={displayName}
          userName={userName}
        />
        <Text text={content} />
        <Text text={date} />
      </VStack>
    </Card>
  )
}

export default TweetCard
