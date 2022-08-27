import { ComponentMeta } from '@storybook/react'
import Skeleton from '../../components/atoms/Skeleton'
import Text from '../../components/atoms/Text'

const SkeletonMeta: ComponentMeta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
}
export default SkeletonMeta

export const Default: React.FC = () => (
  <Skeleton>
    <Text text="アキくんすき" />
  </Skeleton>
)
