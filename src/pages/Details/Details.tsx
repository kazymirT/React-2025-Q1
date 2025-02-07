import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { Character } from 'rickmortyapi';
import styles from './Details.module.scss';

const Details = () => {
  const { data } = useLoaderData<{
    id: string;
    url: URL;
    data: Character;
  }>();
  const { created, gender, name, status, type, species, image } = data;
  const [searchParams] = useSearchParams();
  return (
    <section className={styles.details}>
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
    </section>
  );
};

export default Details;
