import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as api from 'constants/apiQueries';
import { format } from 'date-fns';

import { episodesActions } from 'redux/actions/episodesActions';

import EpisodesList from 'components/App/EpisodesList';
import Header from 'components/App/Header';
import Spinner from 'components/App/Spinner';

import styles from './App.module.scss';

const today = format(new Date(), 'YYYY-MM-DD');

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(episodesActions());
  }

  render() {
    console.log(this.props.episodes);
    // const { error } = this.state;
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

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     episodes: state.episodes
//   // whenever the changes - after reponse from API for example - this state rerenders and the state object will be sent as props to the component
//   // This props: <EpisodesList episodes={newState}
//   // The action takes in the whole application's state, the entire thing
//   // Whatever is returned will show up as props inside of children (EpisodesList)
//   // The returned object will be equal to this.props in EpisodesList
//   }
// };

// const mapDispatchToProps = (dispatch) => ({
//   episodesActions: () => dispatch(episodesActions())
//  });

// Anything returned from this function will end up as props on the EpisodesList container
// so now we can call this.props.episodes on the App component
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ episodes: episodesActions }, dispatch);
// }

export default connect(mapStateToProps)(App);
// this produces a container
// export default connect(mapStateToProps)(App);
