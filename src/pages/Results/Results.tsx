import styles from './Results.module.scss';
import CardList from '../../components/CardList/CardList';
import { Pagination } from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';
import NoResult from '../../components/NoResult/NoResult';
import { useGetAllCharactersQuery } from '@/redux/services/character';
import { useAppSelector } from '@/redux/hooks';
import { queryParams } from '@/redux/slices/queryParamsSlice';

const Results = () => {
  const { page, name } = useAppSelector(queryParams);

  const { data, isError, isFetching, isSuccess } = useGetAllCharactersQuery({
    page,
    name,
  });
  return (
    <section className={styles.results}>
      <h2 className={styles.title}>Search results.</h2>
      <div className={styles.wrapper}>
        {isSuccess && <CardList data={data.results} />}
        {isSuccess && <Pagination totalPages={data.info?.pages} />}
        {isFetching && <Loader />}
        {isError && <NoResult />}
      </div>
    </section>
  );
};

export default Results;
