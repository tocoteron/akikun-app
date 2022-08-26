import { ComponentMeta } from '@storybook/react'
import CircleAvatar from '../../components/atoms/CircleAvatar'
import { akikun } from '../../mockdata/twitter'

const CircleAvatarMeta: ComponentMeta<typeof CircleAvatar> = {
  title: 'Atoms/CircleAvatar',
  component: CircleAvatar,
}
export default CircleAvatarMeta

export const Small: React.FC = () => (
  <CircleAvatar image={akikun.icon} size="small" />
)

export const Medium: React.FC = () => (
  <CircleAvatar image={akikun.icon} size="medium" />
)

export const Large: React.FC = () => (
  <CircleAvatar image={akikun.icon} size="large" />
)
