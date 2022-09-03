import { ComponentMeta, ComponentStory } from '@storybook/react'

import TopPage from '../../components/pages/TopPage'

const TwitterCardMeta: ComponentMeta<typeof TopPage> = {
  title: 'Pages/TopPage',
  component: TopPage,
}
export default TwitterCardMeta

const Template: ComponentStory<typeof TopPage> = args => <TopPage {...args} />

export const Default = Template.bind({})
Default.args = {}
