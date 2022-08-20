import { RoconRoot } from 'rocon/react';
import Routes from './routes/Routes';
import LocationNotFoundErrorBoundary from './routes/LocationNotFoundErrorBoundary';
import './App.css'

function App() {
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
