import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '../../components/atoms/Button'

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
}
export default ButtonMeta

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'アキくんすき',
}
