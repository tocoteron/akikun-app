import { ComponentMeta, ComponentStory } from '@storybook/react'
import VStack from '~/components/atoms/VStack'
import Skeleton from '~/components/atoms/Skeleton'
import Text from '~/components/atoms/Text'

const VStackMeta: ComponentMeta<typeof VStack> = {
  title: 'Atoms/VStack',
  component: VStack,
  argTypes: {
    children: {
      control: false,
    },
  },
}
export default VStackMeta

const Template: ComponentStory<typeof VStack> = args => <VStack {...args} />

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
