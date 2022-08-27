import { ComponentMeta, ComponentStory } from '@storybook/react'
import Text from '../../components/atoms/Text'

const TextMeta: ComponentMeta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
}
export default TextMeta

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'アキくんすき',
}
