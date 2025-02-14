import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import styles from './SelectedControl.module.scss';
import { clearSelection } from '@/redux/slices/selectedItemsSlice';
import { useEffect, useState } from 'react';
import { createCsv } from './createCsv';
import { selectedItem } from '@/redux/slices/selectedItemsSlice';

const SelectedControl = () => {
  const [file, setFile] = useState('');
  const dispatch = useAppDispatch();
  const { selectedItemsId, selectedItems } = useAppSelector(selectedItem);

  const handlerClearSelected = () => dispatch(clearSelection());

  useEffect(() => {
    const newFile = createCsv(selectedItems);
    setFile(newFile);
  }, [selectedItems]);

  const countSelectedItems = selectedItemsId.length;
  return (
    <section className={styles.control}>
      <button onClick={handlerClearSelected} type="button">
        Unselect all
      </button>
      <h2>{countSelectedItems} items are selected</h2>
      <a href={file} download={`${countSelectedItems}_characters`}>
        Download
      </a>
    </section>
  );
};

export default SelectedControl;
