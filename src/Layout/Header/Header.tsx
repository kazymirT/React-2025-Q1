import { Link } from 'react-router-dom';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import styles from './Header.module.scss';
import logo from '@/assets/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} width={150} height={150} alt="logo icon" />
      </Link>
      <h2>Rick and Morty</h2>
      <ToggleTheme />
    </header>
  );
};

export default Header;
