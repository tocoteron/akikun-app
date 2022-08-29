import { ComponentMeta, ComponentStory } from '@storybook/react'
import { akikun } from '../../mockdata/twitter'

import TwitterUser from '../../components/molecules/TwitterUser'

const TwitterUserMeta: ComponentMeta<typeof TwitterUser> = {
  title: 'Molecules/TwitterUser',
  component: TwitterUser,
}
export default TwitterUserMeta

const Template: ComponentStory<typeof TwitterUser> = args => (
  <TwitterUser {...args} />
)

export const Default = Template.bind({})
Default.args = {
  icon: akikun.icon,
  displayName: akikun.displayName,
  userName: akikun.userName,
}
