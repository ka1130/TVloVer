import React, {Component} from 'react';
import { connect } from 'react-redux';
import { today } from 'constants/apiQueries';

import { fetchEpisodes } from 'redux/actions/episodesActions';

import EpisodesList from 'components/App/EpisodesList';
import Header from 'components/App/Header';
import Spinner from 'components/App/Spinner';

import styles from './App.module.scss';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEpisodes());
  }

  render() {
    const { error, loading, episodes } = this.props;
    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div className={styles.appWrapper}>
        <Header/>
        { loading ? <Spinner /> : <EpisodesList episodes={episodes} day={today}/> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episodes: state.data.episodes,
  loading: state.data.loading,
  error: state.data.error
});

export default connect(mapStateToProps)(App);
