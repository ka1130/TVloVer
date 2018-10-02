import React, {Component} from 'react';
import moment from 'moment';

import loading from 'images/loading.gif';
import Header from './Header';
import EpisodesList from './EpisodesList';

import styles from './App.module.scss';

const API_BASE = 'https://api.tvmaze.com'
const DATE_BASE = '/schedule?date=';
const COUNTRY_BASE = '&country=';
const DEFAULT_COUNTRY = 'US';

const today = moment().format('YYYY-MM-DD');

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
    this.setState({ _loading: true });
    this.sendQuery(API_BASE + DATE_BASE + today + COUNTRY_BASE + DEFAULT_COUNTRY);
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
        this.setState({ _loading: false, shows });
      })
      .catch(error => this.setState({ _loading: false, error }));
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div className={styles.appWrapper}>
        <Header/>
        { this.state._loading
          ? <img alt="loading" src={loading} className={styles.loading} />
          : <EpisodesList shows={this.state.shows} day={today}/>
        }
      </div>
    );
  }
}

export default App;
