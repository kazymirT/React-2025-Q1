import type { ChangeEvent, FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  selectedItem,
  toggleItemSelection,
} from '@/redux/slices/selectedItemsSlice';

import type { CardProps } from './types';
import styles from './Card.module.scss';
import { CARD_TEST_ID } from './constants';

const Card: FC<CardProps> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { selectedItemsId } = useAppSelector(selectedItem);

  const { image, name, status, gender, id } = data;
  const isSelected = selectedItemsId.includes(id);

  const handlerToggleSelected = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    dispatch(toggleItemSelection(data));
  };
  const handlerNavigate = () => navigate(`/details/${id}/?${searchParams}`);
  return (
    <div
      onClick={handlerNavigate}
      className={styles.card}
      data-testid={CARD_TEST_ID}
    >
      <img src={image} alt={`Image of ${name}`} width={300} height={300} />
      <div className={styles.description}>
        <div className={styles.text}>
          <h3>{name}</h3>
          <p>
            <span>{status}</span>
            <span>|</span>
            <span>{gender}</span>
          </p>
        </div>
        <p>#{id}</p>
      </div>
      <div className={styles.favorite}>
        <input
          title="Add to my favorite"
          type="checkbox"
          checked={isSelected}
          onClick={(e) => e.stopPropagation()}
          onChange={handlerToggleSelected}
        />
      </div>
    </div>
  );
};

export default Card;
