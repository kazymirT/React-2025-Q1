import React, { type ReactNode } from 'react';
import styles from './NoResult.module.scss';

export default class NoResult extends React.Component {
  render(): ReactNode {
    return (
      <p className={styles['no-result']}>
        The search returned no results, please try again.
      </p>
    );
  }
}
