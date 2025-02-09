import styles from './ErrorPage.module.scss';
import { ERROR_PAGE_MASSAGE } from './constants';

const ErrorPage = () => {
  const handleReloadPage = () => {
    window.location.reload();
  };
  return (
    <div className={styles.wrapper}>
      <p>{ERROR_PAGE_MASSAGE}</p>
      <button type="button" onClick={handleReloadPage}>
        Reload Page
      </button>
    </div>
  );
};

export default ErrorPage;
