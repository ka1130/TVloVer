import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { today } from 'constants/apiQueries';
import { countries } from 'constants/countries';
import { fetchEpisodes } from 'redux/actions/episodesActions';

import { getCurrentEpisodes } from 'helpers/pagination'

import ActiveEpisodeModal from 'components/App/ActiveEpisodeModal';
import EpisodesList from 'components/App/EpisodesList';
import Pagination from 'components/App/Pagination';
import Select from 'components/App/Select';
import Spinner from 'components/App/Spinner';

import styles from './App.module.scss';

class App extends Component {
  state = {
    isModalVisible: false,
    activeEpisode: null,
  }

  componentDidMount() {
    this.props.fetchEpisodes('us');
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

  selectCountry = country => {
    this.props.fetchEpisodes(country);
    this.props.history.push('1');
  }

  render() {
    const { error, loading, episodes } = this.props;
    const { isModalVisible, activeEpisode } = this.state;
    const episodesPerPage = 12;
    const currentPage = this.props.match.params.page;
    const currentEpisodes = getCurrentEpisodes(currentPage, episodesPerPage, episodes);

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div className={styles.appWrapper}>
        <h6 className={styles.showsHeading}>What’s on telly on <span className={styles.date}>{today}</span></h6>
        <Pagination episodesPerPage={episodesPerPage} currentPage={currentPage} history={this.props.history}/>
        <Select options={countries} onChange={this.selectCountry}/>
        {
          loading
          ? <Spinner />
          : <EpisodesList episodes={currentEpisodes} openModal={this.openModal}/>
        }
        <Pagination episodesPerPage={episodesPerPage} currentPage={currentPage} history={this.props.history}/>
        <ActiveEpisodeModal isVisible={isModalVisible} hideDetails={event => this.closeModal(event)} activeEpisode={activeEpisode}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchEpisodes }, dispatch)
);

const mapStateToProps = state => ({
  episodes: state.data.episodes,
  loading: state.data.loading,
  error: state.data.error
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// our App has now the following props: dispatch: fn, episodes array, error: obj and loading: bool
// we pass down the App's episodes prop to EpisodesList via <EpisodesList episodes={episodes} > 
// so EpisodesList can also read what episodes are
