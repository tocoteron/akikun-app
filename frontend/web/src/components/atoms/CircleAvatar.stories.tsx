import { ComponentMeta } from '@storybook/react'
import CircleAvatar from './CircleAvatar'

const CircleAvatarMeta: ComponentMeta<typeof CircleAvatar> = {
  title: 'Atoms/CircleAvatar',
  component: CircleAvatar,
}
export default CircleAvatarMeta

const image =
  'https://pbs.twimg.com/profile_images/1377456301379264514/ZaLQ0oQh_400x400.jpg'

export const Small: React.FC = () => <CircleAvatar image={image} size="small" />

export const Medium: React.FC = () => (
  <CircleAvatar image={image} size="medium" />
)

export const Large: React.FC = () => <CircleAvatar image={image} size="large" />
