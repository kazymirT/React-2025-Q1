import { type ChangeEvent, Component, type ReactNode } from 'react';
import styles from './Header.module.scss';
import {
  getLocalStorage,
  setLocalStorage,
} from '../../components/utils/Storage';
import { type HeaderProps, type HeaderState } from './types';

export default class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount(): void {
    const search: string = getLocalStorage('search');
    if (search) {
      this.props.onClick(search);
      this.setState({ inputValue: search });
    }
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    this.setState({ inputValue: value });
    setLocalStorage('search', value);
  };

  handleSearch = () => {
    this.props.onClick(this.state.inputValue);
  };

  render(): ReactNode {
    return (
      <header className={styles.header}>
        <div className={styles.search}>
          <input
            defaultValue={this.state.inputValue}
            onChange={this.handleInputChange}
            type="text"
          />
          <button onClick={this.handleSearch} type="button">
            Search
          </button>
        </div>
      </header>
    );
  }
}
