import type { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { queryParams, setPage } from '@/redux/slices/queryParamsSlice';

import styles from './Pagination.module.scss';
import { PaginationProps } from './types';

export const Pagination: FC<PaginationProps> = ({ totalPages }) => {
  const [, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { page: currentPage } = useAppSelector(queryParams);

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      const updatedParams = new URLSearchParams(prev);
      updatedParams.set('page', `${page}`);
      return updatedParams;
    });
    dispatch(setPage(page));
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      <span>
        {currentPage}/{totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {'>'}
      </button>
    </div>
  );
};
