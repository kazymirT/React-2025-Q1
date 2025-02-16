import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import styles from './Header.module.scss';
import logo from '@/assets/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={logo} width={150} height={150} alt="logo icon" />
      </a>
      <h2>Rick and Morty</h2>
      <ToggleTheme />
    </header>
  );
};

export default Header;
