import React, {Component} from 'react';
import { connect } from 'react-redux';
// import * as api from 'constants/apiQueries';
import { format } from 'date-fns';

import { fetchEpisodes } from 'redux/actions/episodesActions';

import EpisodesList from 'components/App/EpisodesList';
import Header from 'components/App/Header';
import Spinner from 'components/App/Spinner';

import styles from './App.module.scss';

const today = format(new Date(), 'YYYY-MM-DD');

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
  episodes: state.episodes.episodes,
  loading: state.episodes.loading,
  error: state.episodes.error
});

export default connect(mapStateToProps)(App);
