import { useAppSelector } from '@/redux/hooks';
import styles from './Footer.module.scss';
import SelectedControl from './components/SelectedControl/SelectedControl';
import { selectedItem } from '@/redux/slices/selectedItemsSlice';

const Footer = () => {
  const { selectedItemsId } = useAppSelector(selectedItem);
  const isSelectedEmpty = selectedItemsId.length === 0;
  return (
    <footer className={styles.footer}>
      {!isSelectedEmpty && <SelectedControl />}
    </footer>
  );
};

export default Footer;
