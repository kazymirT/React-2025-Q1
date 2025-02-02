import React, { type ReactNode } from 'react';
import styles from './Loader.module.scss';

export default class Loader extends React.Component {
  render(): ReactNode {
    return (
      <div className={styles.wrapper}>
        <span className={styles.loader} />
      </div>
    );
  }
}
