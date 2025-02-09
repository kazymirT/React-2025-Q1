import styles from './Footer.module.scss';
import ErrorBtn from '../../components/BtnError/BtnError';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ErrorBtn />
    </footer>
  );
};

export default Footer;
