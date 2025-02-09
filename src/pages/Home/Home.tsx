import Header from '../../Layout/Header/Header';
import styles from './Home.module.scss';
import Footer from '../../Layout/Footer/Footer';
import Main from '../../Layout/Main/Main';
import { useSearchParams } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useEffect } from 'react';

const Home = () => {
  const [, setSearchParams] = useSearchParams();
  const { searchValue } = useLocalStorage();

  useEffect(() => {
    setSearchParams({ name: searchValue });
  }, []);

  return (
    <div className={styles.home}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
