import { RoconRoot } from 'rocon/react'
import Routes from './routes/Routes'
import LocationNotFoundErrorBoundary from './routes/LocationNotFoundErrorBoundary'

const App: React.FC = () => {
  return (
    <div className="App">
      <RoconRoot>
        <LocationNotFoundErrorBoundary fallback={<div>Not found</div>}>
          <Routes />
        </LocationNotFoundErrorBoundary>
      </RoconRoot>
    </div>
  )
}

export default App
