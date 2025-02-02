import React, { ReactNode } from 'react';
import styles from './NoResult.module.scss';
import { type NoResultProps } from './types';

export default class NoResult extends React.Component<NoResultProps> {
  static defaultProps = {
    errorMessage: 'The search returned no results, please try again.',
  };

  render(): ReactNode {
    return <p className={styles['no-result']}>{this.props.errorMessage}</p>;
  }
}
