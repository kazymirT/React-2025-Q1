import styles from './Results.module.scss';
import { useGetAllCharactersQuery } from '@/redux/services/character';
import { useAppSelector } from '@/redux/hooks';
import { queryParams } from '@/redux/slices/queryParamsSlice';
import Loader from '@/components/Loader/Loader';
import NoResult from '@/pages/Home/modules/NoResult/NoResult';
import { Pagination } from '../Pagination/Pagination';
import CardList from '../CardList/CardList';

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
