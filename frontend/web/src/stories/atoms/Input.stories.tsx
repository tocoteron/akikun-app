import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from '~/components/atoms/Input'

const ButtonMeta: ComponentMeta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
}
export default ButtonMeta

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 'アキくんすき',
}
