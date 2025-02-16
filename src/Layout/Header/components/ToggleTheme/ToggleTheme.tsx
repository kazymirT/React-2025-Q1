import styles from './ToggleTheme.module.scss';
import { useTheme } from '@/providers/themeContext/useTheme';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles['toggle-theme']}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
};

export default ToggleTheme;
