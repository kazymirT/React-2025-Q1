import { LOADER_TEST_ID } from './constants';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.wrapper} data-testid={LOADER_TEST_ID}>
      <span className={styles.loader} />
    </div>
  );
};

export default Loader;
