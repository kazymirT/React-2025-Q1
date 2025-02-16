import React from 'react';

import styles from './ToggleTheme.module.scss';
import { useTheme } from '@/providers/themeContext/useTheme';

const ToggleTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles['toggle-theme']} onClick={toggleTheme}>
      <button>
        <div className={`icon ${theme === 'dark' ? 'dark' : 'light'}`}></div>
      </button>
    </div>
  );
};

export default ToggleTheme;
