import { ComponentMeta, ComponentStory } from '@storybook/react'
import { tweet } from '~/mockdata/twitter'
import TweetCard from '~/components/organisms/TweetCard'

const TwitterCardMeta: ComponentMeta<typeof TweetCard> = {
  title: 'Organisms/TwitterCard',
  component: TweetCard,
}
export default TwitterCardMeta

const Template: ComponentStory<typeof TweetCard> = args => (
  <TweetCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  icon: tweet.author.icon,
  displayName: tweet.author.displayName,
  userName: tweet.author.userName,
  content: tweet.content,
  date: tweet.date,
}
