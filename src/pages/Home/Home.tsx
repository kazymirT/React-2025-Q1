import styles from './Home.module.scss';
import { Outlet } from 'react-router-dom';
import Search from './modules/Search/Search';
import Results from './modules/Results/Results';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Search />
        <Results />
      </main>
      <Outlet />
    </div>
  );
};

export default Home;
