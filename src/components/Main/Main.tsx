import styles from './Main.module.scss';
import { Component, type ReactNode } from 'react';

import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import NoResult from '../NoResult/NoResult';

import { type MainProps, type MainState } from './types';
import { fetchCharactersByName } from '../../Api/api';

export default class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      status: 'idle',
      data: null,
      error: null,
    };
  }

  componentDidUpdate(prevProps: MainProps) {
    if (prevProps.data !== this.props.data) {
      this.loadData(this.props.data);
    }
  }

  async loadData(search: string | null) {
    this.setState({ status: 'loading' });

    try {
      if (search || typeof search === 'string') {
        const characterData = await fetchCharactersByName(search);

        if (characterData.results) {
          this.setState({
            status: 'success',
            data: characterData.results,
            error: null,
          });
        }
      }
    } catch (error) {
      this.setState({
        status: 'error',
        data: null,
        error:
          error instanceof Error ? error.message : 'Unexpected error occurred',
      });
    }
  }

  renderLoading(): ReactNode {
    return <Loader />;
  }

  renderError(): ReactNode {
    return <NoResult errorMessage={this.state.error} />;
  }

  renderResults(): ReactNode {
    const { data } = this.state;

    return (
      <main className={styles.main}>
        <h2 className={styles.title}>Search results.</h2>
        <div className={styles.list}>
          {data && data.length > 0 ? (
            data.map((item, index) => <Card key={index} data={item} />)
          ) : (
            <NoResult />
          )}
        </div>
      </main>
    );
  }

  render(): ReactNode {
    const { status } = this.state;

    switch (status) {
      case 'loading':
        return this.renderLoading();
      case 'error':
        return this.renderError();
      case 'success':
        return this.renderResults();
      default:
        return null;
    }
  }
}
