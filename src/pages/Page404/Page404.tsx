import { useNavigate } from 'react-router-dom';

import styles from './Page404.module.scss';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <h2>404</h2>
      <p>Page not found</p>
      <button onClick={() => navigate(`/`)}>Go to main page</button>
    </section>
  );
};

export default Page404;
