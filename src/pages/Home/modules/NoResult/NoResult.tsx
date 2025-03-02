import { type FC } from 'react';
import styles from './NoResult.module.scss';
import { type NoResultProps } from './types';
import { DEFAULT_ERROR_MESSAGE } from './constants';

const NoResult: FC<NoResultProps> = ({
  errorMessage = DEFAULT_ERROR_MESSAGE,
}) => {
  return <p className={styles['no-result']}>{errorMessage}</p>;
};

export default NoResult;
