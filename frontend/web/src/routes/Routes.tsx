import Rocon, { useRoutes } from 'rocon/react'
import TopPage from '../components/pages/TopPage'

const routes = Rocon.Path().exact({ action: () => <TopPage /> })

const Routes: React.FC = () => useRoutes(routes)

export default Routes
