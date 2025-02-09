import { useSearchParams } from 'react-router-dom';
import styles from './Results.module.scss';
import CardList from '../../components/CardList/CardList';
import { Pagination } from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';
import { useFetch } from '../../hooks/useFetch';
import NoResult from '../../components/NoResult/NoResult';
import { type FetchCharactersResponse } from './types';

const Results = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const name = searchParams.get('name') || '';
  const { data, error, loading } = useFetch<FetchCharactersResponse>(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
  );
  return (
    <section className={styles.results}>
      <h2 className={styles.title}>Search results.</h2>
      <div className={styles.wrapper}>
        {!error && !loading && <CardList data={data?.results} />}
        {!error && data && !loading && (
          <Pagination totalPages={data.info?.pages} />
        )}
        {loading && <Loader />}
        {error && <NoResult errorMessage={error} />}
      </div>
    </section>
  );
};

export default Results;
