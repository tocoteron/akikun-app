import React from 'react'
import { isLocationNotFoundError } from 'rocon/react'

interface Props {
  children: React.ReactNode
  fallback: React.ReactNode
}

interface State {
  isNotFound: boolean
}

class NotFoundErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { isNotFound: false }
  }

  static getDerivedStateFromError(error: unknown): State {
    return { isNotFound: isLocationNotFoundError(error) }
  }

  render(): React.ReactNode {
    return this.state.isNotFound ? this.props.fallback : this.props.children
  }
}

export default NotFoundErrorBoundary
