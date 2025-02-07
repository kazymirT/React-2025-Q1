import styles from './Main.module.scss';
import { type FC, useEffect, useState } from 'react';
import { type Character } from 'rickmortyapi';

import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import NoResult from '../NoResult/NoResult';

import { type MainProps } from './types';
import { fetchCharactersByName } from '../../Api/api';

const Main: FC<MainProps> = ({ searchName }) => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [data, setData] = useState<Character[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadData = async (search: string | null) => {
      setStatus('loading');

      try {
        if (search || typeof search === 'string') {
          const characterData = await fetchCharactersByName(search);

          if (characterData.results) {
            setData(characterData.results);
            setStatus('success');
          }
        }
      } catch (error) {
        setStatus('error');
        setError(
          error instanceof Error ? error.message : 'Unexpected error occurred'
        );
      }
    };
    loadData(searchName);
  }, [searchName]);
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Search results.</h2>
      <div className={styles.list}>
        {data && data.length > 0 ? (
          data.map((item, index) => <Card key={index} data={item} />)
        ) : (
          <NoResult />
        )}
        {status === 'error' && error && <NoResult errorMessage={error} />}
        {status === 'loading' && <Loader />}
      </div>
    </main>
  );
};

export default Main;
