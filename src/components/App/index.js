import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// through this react-redux bridge this component gets promoted to a container which is a "smart component"
// that is a componnet that has direct connection to Redux
import { today } from 'constants/apiQueries';

import { fetchEpisodes } from 'redux/actions/episodesActions';

import ActiveShowModal from 'components/App/ActiveShowModal';
import EpisodesList from 'components/App/EpisodesList';
import Header from 'components/App/Header';
import Pagination from 'components/App/Pagination';
import Spinner from 'components/App/Spinner';

import styles from './App.module.scss';

// const { todos, currentPage, todosPerPage } = this.state;

// Logic for displaying current todos
/* const indexOfLastTodo = currentPage * todosPerPage;
const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

const renderTodos = currentTodos.map((todo, index) => {
  return <li key={index}>{todo}</li>;
});

// Logic for displaying page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
  pageNumbers.push(i);
} */

class App extends Component {
  componentDidMount() {
    this.props.fetchEpisodes();
  }

  render() {
    const { error, loading, episodes, activeShow } = this.props;
    const currentPage = this.props;
    console.log(currentPage);
    // const episodesPerPage = 12; //arbitrary number, fits nicely into various screen widths
    // const indexOfLastEpisode = parseInt(currentPage) * episodesPerPage;
    // const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
    
    // const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode);
    // console.log(currentPage, indexOfFirstEpisode, indexOfLastEpisode, currentEpisodes);

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div className={styles.appWrapper}>
        <Header/>
        { loading ? <Spinner /> : <EpisodesList episodes={episodes} day={today}/> }
        <Pagination />
        <ActiveShowModal isVisible={activeShow !== null} activeShow={activeShow}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchEpisodes }, dispatch)
);

const mapStateToProps = state => ({
  activeShow: state.activeShow,
  episodes: state.data.episodes,
  loading: state.data.loading,
  error: state.data.error
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// our App has now the following props: dispatch: fn, episodes array, error: obj and loading: bool
// we pass down the App's episodes prop to EpisodesList via <EpisodesList episodes={episodes} > 
// so EpisodesList can also read what episodes are
