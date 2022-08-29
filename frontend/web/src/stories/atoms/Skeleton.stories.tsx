import { ComponentMeta, ComponentStory } from '@storybook/react'
import Skeleton from '../../components/atoms/Skeleton'
import Text from '../../components/atoms/Text'

const SkeletonMeta: ComponentMeta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  argTypes: {
    children: {
      control: false,
    },
  },
}
export default SkeletonMeta

const Template: ComponentStory<typeof Skeleton> = args => <Skeleton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <Text text="アキくんすき" />,
}
