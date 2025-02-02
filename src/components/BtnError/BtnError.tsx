import styles from './BtnError.module.scss';
import React from 'react';
import { type ErrorBtnState } from './types';

export default class ErrorBtn extends React.Component<object, ErrorBtnState> {
  constructor(props: object) {
    super(props);
    this.state = { hasError: false };
  }
  handleClick = () => {
    this.setState({ hasError: true });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      throw new Error('I crashed!');
    }
    return (
      <button className={styles.btn} type="button" onClick={this.handleClick}>
        Error
      </button>
    );
  }
}
