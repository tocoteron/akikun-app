import { ComponentMeta, ComponentStory } from '@storybook/react'

import SearchForm from '../../components/molecules/SearchForm'

const SearchFormMeta: ComponentMeta<typeof SearchForm> = {
  title: 'Molecules/SearchForm',
  component: SearchForm,
}
export default SearchFormMeta

const Template: ComponentStory<typeof SearchForm> = args => (
  <SearchForm {...args} />
)

export const Default = Template.bind({})
Default.args = {}
