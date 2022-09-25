import { Suspense } from 'react'
import { RoconRoot } from 'rocon/react'
import { APIProvider } from '~/api'
import Routes from '~/routes/Routes'
import ErrorBoundary from '~/components/errors/ErrorBoundary'
import NotFoundErrorBoundary from '~/components/errors/NotFoundErrorBoundary'
import ErrorPage from '~/components/pages/ErrorPage'
import NotFoundPage from '~/components/pages/NotFoundPage'
import LoadingPage from '~/components/pages/LoadingPage'

const App: React.FC = () => {
  return (
    <APIProvider>
      <RoconRoot>
        <ErrorBoundary fallback={<ErrorPage />}>
          <NotFoundErrorBoundary fallback={<NotFoundPage />}>
            <Suspense fallback={<LoadingPage />}>
              <Routes />
            </Suspense>
          </NotFoundErrorBoundary>
        </ErrorBoundary>
      </RoconRoot>
    </APIProvider>
  )
}

export default App
