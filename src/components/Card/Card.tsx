import { type FC } from 'react';
import { CardProps } from './types';
import styles from './Card.module.scss';
import { NavLink, useSearchParams } from 'react-router-dom';
import { CARD_TEST_ID } from './constants';

const Card: FC<CardProps> = ({ data }) => {
  const { image, name, status, gender, created, id } = data;
  const [searchParams] = useSearchParams();
  return (
    <NavLink
      to={`/details/${id}/?${searchParams}`}
      className={styles.card}
      data-testid={CARD_TEST_ID}
    >
      <img src={image} alt={`Image of ${name}`} width={300} height={300} />
      <div className={styles.content}>
        <h2>{name}</h2>
        <ul>
          <li>
            <strong>Status:</strong> {status}
          </li>
          <li>
            <strong>Gender:</strong> {gender}
          </li>
          <li>
            <strong>Created:</strong> {created}
          </li>
        </ul>
      </div>
    </NavLink>
  );
};

export default Card;
