import { skipToken } from '@reduxjs/toolkit/query';
import { useGetCharacterByIdQuery } from '@/redux/services/character';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import Loader from '@/components/Loader/Loader';
import styles from './Details.module.scss';
import DetailsCard from './components/DetailsCard/DetailsCard';

const Details = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { detailsId } = useParams<{ detailsId: string }>();

  const { data, isFetching } = useGetCharacterByIdQuery(detailsId ?? skipToken);
  const handleClick = () => navigate(`/?${searchParams}`);

  return (
    <section className={styles.details}>
      <h2>Details Page</h2>
      <button onClick={handleClick} type="button">
        Cancel
      </button>
      <div className={styles.wrapper}>
        {data && <DetailsCard data={data} />}
      </div>
      {isFetching && <Loader />}
    </section>
  );
};

export default Details;
