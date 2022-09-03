import { ComponentMeta, ComponentStory } from '@storybook/react'
import { akikun, tweet } from '~/mockdata/twitter'
import TwitterCard from '~/components/organisms/TwitterCard'

const TwitterCardMeta: ComponentMeta<typeof TwitterCard> = {
  title: 'Organisms/TwitterCard',
  component: TwitterCard,
}
export default TwitterCardMeta

const Template: ComponentStory<typeof TwitterCard> = args => (
  <TwitterCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  icon: akikun.icon,
  displayName: akikun.displayName,
  userName: akikun.userName,
  content: tweet.content,
  date: tweet.date,
}
