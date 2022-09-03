import React from 'react'
import VStack from '~/components/atoms/VStack'
import HStack from '~/components/atoms/HStack'
import CircleAvatar from '~/components/atoms/CircleAvatar'
import Text from '~/components/atoms/Text'

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
    <HStack align="center" gap="m">
      <CircleAvatar source={icon} size="s" />
      <VStack>
        <Text text={displayName} />
        <Text text={`@${userName}`} />
      </VStack>
    </HStack>
  )
}

export default TwitterUser
