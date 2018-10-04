import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as api from 'constants/apiQueries';
import { format } from 'date-fns';

import { episodesActions } from 'redux/actions/episodesActions';

import EpisodesList from 'components/App/EpisodesList';
import Header from 'components/App/Header';
import Spinner from 'components/App/Spinner';

import styles from './App.module.scss';

const today = format(new Date(), 'YYYY-MM-DD');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [],
      loading: false,
      error: null,
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.sendQuery(api.API_BASE + api.DATE_BASE + today + api.COUNTRY_BASE + api.DEFAULT_COUNTRY);
  }

  sendQuery = url => {
    fetch(url)
      .then(response => {
        /* Native fetch API doesn’t use its catch block for every code. For instance, when a HTTP 404 happens,
        it wouldn’t run into the catch block. That's why we force it to run into the catch block
        by throwing an error when the response doesn’t match theexpected data. */
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(episodes => {
        this.setState({ loading: false, episodes });
      })
      .catch(error => this.setState({ loading: false, error }));
  }

  episodesActions = () => {
    this.props.episodesActions();
   }

  render() {
    console.log(this.props.episodes);
    const { error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div className={styles.appWrapper}>
        <Header/>
        <button onClick={this.episodesActions}>Test fetch episodes action</button>
        <button onClick={() => this.props.episodes}>Test App: this.props.episodes</button>
        <pre>{JSON.stringify(this.props)}</pre>
        { this.state.loading
          ? <Spinner />
          : <EpisodesList episodes={this.state.episodes} day={today}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    episodes: state.episodes
  // whenever the changes - after reponse from API for example - this state rerenders and the state object will be sent as props to the component
  // This props: <EpisodesList episodes={newState}
  // The action takes in the whole application's state, the entire thing
  // Whatever is returned will show up as props inside of children (EpisodesList)
  // The returned object will be equal to this.props in EpisodesList
  }
};

// const mapDispatchToProps = (dispatch) => ({
//   episodesActions: () => dispatch(episodesActions())
//  });

// Anything returned from this function will end up as props on the EpisodesList container
// so now we can call this.props.episodes on the App component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ episodes: episodesActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// this produces a container
// export default connect(mapStateToProps)(App);
