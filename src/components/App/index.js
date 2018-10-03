import React, {Component} from 'react';
import * as api from 'constants/apiQueries';
import { format } from 'date-fns';

import EpisodesList from 'components/App/EpisodesList';
import Header from 'components/App/Header';
import Spinner from 'components/App/Spinner';

import styles from './App.module.scss';

const today = format(new Date(), 'YYYY-MM-DD');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: [],
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
      .then(shows => {
        this.setState({ loading: false, shows });
      })
      .catch(error => this.setState({ loading: false, error }));
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div className={styles.appWrapper}>
        <Header/>
        { this.state.loading
          ? <Spinner />
          : <EpisodesList shows={this.state.shows} day={today}/>
        }
      </div>
    );
  }
}

export default App;
