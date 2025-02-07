import Header from '../../Layout/Header/Header';
import styles from './Home.module.scss';
import Footer from '../../Layout/Footer/Footer';
import Main from '../../components/Main/Main';
import { useEffect, useState } from 'react';

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const handleChangeSearch = (newSearch: string) => {
    setSearchValue(newSearch);
    localStorage.setItem('search', newSearch);
  };
  useEffect(() => {
    setSearchValue(localStorage.getItem('search') || '');
  }, []);
  return (
    <div className={styles.home}>
      <Header onClick={handleChangeSearch} searchValue={searchValue} />
      <Main searchName={searchValue} />
      <Footer />
    </div>
  );
};

export default Home;
