import { type HomeProps, type HomeState } from './types';
import Header from '../../Layout/Header/Header';
import styles from './Home.module.scss';
import Footer from '../../Layout/Footer/Footer';
import Main from '../../components/Main/Main';
import React from 'react';

export default class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      searchValue: null,
    };
  }

  handleChangeSearch = (value: string) => {
    this.setState({ searchValue: value });
  };

  render(): React.ReactNode {
    return (
      <div className={styles.home}>
        <Header onClick={this.handleChangeSearch} />
        <Main data={this.state.searchValue} />
        <Footer />
      </div>
    );
  }
}
