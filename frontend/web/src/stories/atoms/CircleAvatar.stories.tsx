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

export const Small = Template.bind({})
Small.args = {
  image: akikun.icon,
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  image: akikun.icon,
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  image: akikun.icon,
  size: 'large',
}
