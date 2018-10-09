import React, { Component } from 'react';
import { connect } from 'react-redux';

// through this react-redux bridge this component gets promoted to a container which is a "smart component"
// that is a componnet that has direct connection to Redux
import { today } from 'constants/apiQueries';

import { fetchEpisodes } from 'redux/actions/episodesActions';

import ActiveEpisodeModal from 'components/App/ActiveEpisodeModal';
import EpisodesList from 'components/App/EpisodesList';
import Header from 'components/App/Header';
import Pagination from 'components/App/Pagination';
import Spinner from 'components/App/Spinner';

import styles from './App.module.scss';

class App extends Component {
  state = {
    currentPage: 1,
    episodesPerPage: 12,
    isModalVisible: false,
    activeEpisode: null,
  }

  componentDidMount() {
    this.props.dispatch(fetchEpisodes());
  }

  handlePageChange = event => {
    this.setState({ currentPage: Number(event.target.id)});
  }

  openModal = (episode) => {
    this.setState({ 
      isModalVisible: true,
      activeEpisode: episode
    });
  }

  closeModal = event => {
    const { id } = event.target;
    if (id === "modalBg" || id === "closeModal") this.setState({ isModalVisible: false })
  }

  render() {
    const { error, loading, episodes } = this.props;
    const { currentPage, episodesPerPage, isModalVisible, activeEpisode} = this.state;

    const indexOfLastEpisode = currentPage * episodesPerPage;
    const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
    const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode);

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div className={styles.appWrapper}>
        <Header/>
        { loading ? <Spinner /> : <EpisodesList episodes={currentEpisodes} day={today} openModal={this.openModal}/> }
        <Pagination episodes={episodes} episodesPerPage={episodesPerPage} handlePageChange={this.handlePageChange} currentPage={currentPage}/>
        <ActiveEpisodeModal isVisible={isModalVisible} hideDetails={event => this.closeModal(event)} activeEpisode={activeEpisode}/>
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
// our App has now the following props: dispatch: fn, episodes array, error: obj and loading: bool
// we pass down the App's episodes prop to EpisodesList via <EpisodesList episodes={episodes} > 
// so EpisodesList can also read what episodes are
