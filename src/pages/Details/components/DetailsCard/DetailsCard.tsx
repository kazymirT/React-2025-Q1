import { FC } from 'react';
import styles from './DetailsCard.module.scss';
import { DetailsProps } from './types';
import { Link, useSearchParams } from 'react-router-dom';

const DetailsCard: FC<DetailsProps> = ({ data }) => {
  const [searchParams] = useSearchParams();
  const { created, gender, image, name, species, status, type } = data;
  return (
    <div className={styles['details-card']}>
      <div className={styles.title}>
        <h3>{name}</h3>
        <Link to={`/?${searchParams}`}>x</Link>
      </div>
      <img src={image} alt={name} width={350} height={350} />
      <ul>
        <li>
          <p>Name:</p>
          <p>{name}</p>
        </li>
        <li>
          <p>Created:</p>
          <p>{created}</p>
        </li>
        <li>
          <p>Gender:</p>
          <p>{gender}</p>
        </li>
        <li>
          <p>Status:</p>
          <p>{status}</p>
        </li>
        <li>
          <p>Type:</p>
          <p>{type}</p>
        </li>
        <li>
          <p>Species:</p>
          <p>{species}</p>
        </li>
      </ul>
    </div>
  );
};

export default DetailsCard;
