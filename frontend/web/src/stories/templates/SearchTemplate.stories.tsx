import { ComponentMeta, ComponentStory } from '@storybook/react'
import { akikun, tweets } from '~/mockdata/twitter'
import SearchTemplate from '~/components/templates/SearchTemplate'

const TwitterCardMeta: ComponentMeta<typeof SearchTemplate> = {
  title: 'Templates/SearchTemplate',
  component: SearchTemplate,
}
export default TwitterCardMeta

const Template: ComponentStory<typeof SearchTemplate> = args => (
  <SearchTemplate {...args} />
)

export const Default = Template.bind({})
Default.args = {
  tweets: tweets.map(tweet => ({
    author: {
      icon: akikun.icon,
      displayName: akikun.displayName,
      userName: akikun.userName,
    },
    content: tweet.content,
    date: tweet.date,
  })),
}
