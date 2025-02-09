import { type FC } from 'react';
import { type CardListProps } from './types';
import styles from './CardList.module.scss';
import Card from '../Card/Card';
import NoResult from '../NoResult/NoResult';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CardList: FC<CardListProps> = ({ data }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      navigate(`/?${searchParams}`);
    }
  };
  return (
    <div className={styles.list} onClick={handleDivClick}>
      {data ? (
        data.map((item) => <Card key={item.id} data={item} />)
      ) : (
        <NoResult />
      )}
    </div>
  );
};

export default CardList;
