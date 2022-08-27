import { ComponentMeta, ComponentStory } from '@storybook/react'
import CircleAvatar from '../../components/atoms/CircleAvatar'
import { akikun } from '../../mockdata/twitter'

const CircleAvatarMeta: ComponentMeta<typeof CircleAvatar> = {
  title: 'Atoms/CircleAvatar',
  component: CircleAvatar,
}
export default CircleAvatarMeta

const Template: ComponentStory<typeof CircleAvatar> = args => (
  <CircleAvatar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  source: akikun.icon,
}
