import styles from './Main.module.scss';

import { Outlet } from 'react-router-dom';
import Results from '../../pages/Results/Results';

const Main = () => {
  return (
    <main className={styles.main}>
      <Results />
      <Outlet />
    </main>
  );
};

export default Main;
