import React from 'react';
import styles from './Footer.module.scss';
import ErrorBtn from '../../components/BtnError/BtnError';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <ErrorBtn />
      </footer>
    );
  }
}
