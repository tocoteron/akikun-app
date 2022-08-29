import React from 'react'
import VStack from '../atoms/VStack'
import HStack from '../atoms/HStack'
import CircleAvatar from '../atoms/CircleAvatar'
import Text from '../atoms/Text'

interface TwitterUserProps {
  icon: string
  displayName: string
  userName: string
}

const TwitterUser: React.FC<TwitterUserProps> = ({
  icon,
  userName,
  displayName,
}) => {
  return (
    <HStack align="center" gap="medium">
      <CircleAvatar source={icon} size="small" />
      <VStack>
        <Text text={displayName} />
        <Text text={`@${userName}`} />
      </VStack>
    </HStack>
  )
}

export default TwitterUser
