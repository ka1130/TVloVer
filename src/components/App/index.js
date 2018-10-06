import React, {Component} from 'react';
import { connect } from 'react-redux';

// through this react-redux bridge this component gets promoted to a container which is a "smart component"
// that is a componnet that has direct connection to Redux
import { today } from 'constants/apiQueries';

import { fetchEpisodes } from 'redux/actions/episodesActions';

import ActiveShowModal from 'components/App/ActiveShowModal';
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

    console.log(this.props.activeShow === null);
    return (
      <div className={styles.appWrapper}>
        <Header/>
        { loading ? <Spinner /> : <EpisodesList episodes={episodes} day={today}/> }
        <ActiveShowModal />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.activeShow);
  return {
    activeShow: state.activeShow,
    episodes: state.data.episodes,
    loading: state.data.loading,
    error: state.data.error
  };
};

export default connect(mapStateToProps)(App);
// our App has now the following props: dispatch: fn, episodes array, error: obj and loading: bool
// we pass down the App's episodes prop to EpisodesList via <EpisodesList episodes={episodes} > 
// so EpisodesList can also read what episodes are