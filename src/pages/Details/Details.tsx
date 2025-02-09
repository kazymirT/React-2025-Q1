import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Character } from 'rickmortyapi';
import styles from './Details.module.scss';
import Loader from '../../components/Loader/Loader';
import { useFetch } from '../../hooks/useFetch';
import DetailsCard from './components/DetailsCard/DetailsCard';

const Details = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { detailsId } = useParams<{ detailsId: string }>();
  const { data, loading, error } = useFetch<Character>(
    `https://rickandmortyapi.com/api/character/${detailsId}`
  );
  const handleClick = () => navigate(`/?${searchParams}`);

  return (
    <section className={styles.details}>
      <h2>Details Page</h2>
      <button onClick={handleClick} type="button">
        Cancel
      </button>
      <div className={styles.wrapper}>
        {data && <DetailsCard data={data} />}
        {error && <p>{error}</p>}
      </div>
      {loading && <Loader />}
    </section>
  );
};

export default Details;
