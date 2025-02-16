import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useTheme } from '@/providers/themeContext/useTheme';
import { LAYOUT_TEST_ID } from './constants';

const Layout = () => {
  const { theme } = useTheme();
  return (
    <div
      data-testid={LAYOUT_TEST_ID}
      className={`${styles.layout} ${theme === 'dark' ? 'dark' : 'light'}`}
    >
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
