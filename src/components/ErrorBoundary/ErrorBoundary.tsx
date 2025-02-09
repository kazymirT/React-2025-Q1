import styles from './ErrorBoundary.module.scss';
import { Component, ReactNode, ErrorInfo } from 'react';
import { type ErrorBoundaryProps, type ErrorBoundaryState } from './types';
import { ERROR_BOUNDARY } from './constants';

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ hasError: true });
    console.log(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className={styles['error-boundary']}>
          <div>
            <h2>{ERROR_BOUNDARY.title}</h2>
            <button onClick={this.handleReset}>{ERROR_BOUNDARY.button}</button>
          </div>
        </div>
      );
    }
    return this.props.children as ReactNode;
  }
}
