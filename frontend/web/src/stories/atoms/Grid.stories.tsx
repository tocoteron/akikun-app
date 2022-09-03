import { ComponentMeta, ComponentStory } from '@storybook/react'
import Grid from '~/components/atoms/Grid'
import Skeleton from '~/components/atoms/Skeleton'
import Text from '~/components/atoms/Text'

const GridMeta: ComponentMeta<typeof Grid> = {
  title: 'Atoms/Grid',
  component: Grid,
  argTypes: {
    children: {
      control: false,
    },
  },
}
export default GridMeta

const Template: ComponentStory<typeof Grid> = args => <Grid {...args} />

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
      <Skeleton>
        <Text text="アキくん" />
      </Skeleton>
      <Skeleton>
        <Text text="すき" />
      </Skeleton>
      <Skeleton>
        <Text text="アキくん" />
      </Skeleton>
      <Skeleton>
        <Text text="すき" />
      </Skeleton>
      <Skeleton>
        <Text text="アキくん" />
      </Skeleton>
      <Skeleton>
        <Text text="すき" />
      </Skeleton>
    </>
  ),
}
