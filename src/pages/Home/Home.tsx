import Header from '@/Layout/Header/Header';
import Main from '@/Layout/Main/Main';
import Footer from '@/Layout/Footer/Footer';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
