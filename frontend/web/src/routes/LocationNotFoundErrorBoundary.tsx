import React from 'react'
import { isLocationNotFoundError } from 'rocon/react'

interface Props {
  children: React.ReactElement
  fallback: React.ReactElement
}

interface State {
  isNotFound: boolean
}

class LocationNotFoundErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { isNotFound: false }
  }

  static getDerivedStateFromError(error: unknown): State {
    return { isNotFound: isLocationNotFoundError(error) }
  }

  render(): React.ReactElement {
    return this.state.isNotFound ? this.props.fallback : this.props.children
  }
}

export default LocationNotFoundErrorBoundary
