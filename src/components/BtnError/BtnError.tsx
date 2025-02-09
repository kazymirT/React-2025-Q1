import styles from './BtnError.module.scss';
import { useState } from 'react';

const ErrorBtn = () => {
  const [state, setState] = useState({ hasError: false });

  const handleClick = () => {
    setState({ hasError: true });
  };

  if (state.hasError) {
    throw new Error('I crashed!');
  }

  return (
    <button className={styles.btn} onClick={handleClick}>
      Error
    </button>
  );
};

export default ErrorBtn;
