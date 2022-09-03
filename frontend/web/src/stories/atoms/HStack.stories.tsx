import { ComponentMeta, ComponentStory } from '@storybook/react'
import HStack from '~/components/atoms/HStack'
import Skeleton from '~/components/atoms/Skeleton'
import Text from '~/components/atoms/Text'

const HStackMeta: ComponentMeta<typeof HStack> = {
  title: 'Atoms/HStack',
  component: HStack,
  argTypes: {
    children: {
      control: false,
    },
  },
}
export default HStackMeta

const Template: ComponentStory<typeof HStack> = args => <HStack {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Skeleton>
        <Text text="アキくん" />
      </Skeleton>
      <Skeleton>
        <Text text="すき" />
      </Skeleton>
    </>
  ),
}
