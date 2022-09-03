import { ComponentMeta, ComponentStory } from '@storybook/react'
import Card from '~/components/atoms/Card'
import Skeleton from '~/components/atoms/Skeleton'
import Text from '~/components/atoms/Text'
import VStack from '~/components/atoms/VStack'

const CardMeta: ComponentMeta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    children: {
      control: false,
    },
  },
}
export default CardMeta

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <VStack>
      <Skeleton>
        <Text text="アキくん" />
      </Skeleton>
      <Skeleton>
        <Text text="すき" />
      </Skeleton>
    </VStack>
  ),
}
