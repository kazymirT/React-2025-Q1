import Header from '@/Layout/Header/Header';
import Main from '@/Layout/Main/Main';
import Footer from '@/Layout/Footer/Footer';

import styles from './Home.module.scss';
import { useTheme } from '@/providers/themeContext/useTheme';

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className={`${styles.home} ${styles[`home__${theme}`]}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
