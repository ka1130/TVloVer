import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Root from 'Root';
import App from 'components/App';
import Watchlist from 'components/App/Watchlist';
import Header from 'components/App/Header';
import Show from 'components/App/Show';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <HashRouter>
        <>
          <Header />
          <Switch>
            <Route path="/shows/:id" component={Show} />
            <Route path="/page/:page" component={App} />
            <Route path="/watchlist" component={Watchlist} />
            <Redirect exact path='/' to='/page/1'/>
          </Switch>
        </>
      </HashRouter>
    </Root>
  );

//   moxios.install();
//   moxios.stubRequest('http://api.tvmaze.com/schedule?date=2017-12-01&country=US', {
//     status: 200,
//     response: {
//       data: {
//         episodes: [
//           {
//             id: 1,
//             name: 'Lorem Ipsum 1',
//             show: {
//               id: 11,
//               image: {
//                 medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/79/199782.jpg',
//                 original: 'http://static.tvmaze.com/uploads/images/original_untouched/79/199782.jpg'
//               }
//             },
//             summary: 'Lorem ipsum 1'
//           },
//           {
//             id: 2,
//             name: 'Lorem Ipsum 2',
//             show: {
//               id: 12,
//               image: {
//                 medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/79/199782.jpg',
//                 original: 'http://static.tvmaze.com/uploads/images/original_untouched/79/199782.jpg'
//               }
//             },
//             summary: 'Lorem ipsum 2'
//           }
//         ]
//       }
//     }
//   });
});

// afterEach(() => {
//   moxios.uninstall();
// });

it('fetches initial list of movies and displays them', (done) => {
  
  setTimeout(() => {
    wrapper.update();
    expect(wrapper.find('Episode').length).toEqual(12);
    done();
    wrapper.unmount();
  }, 500);

  // moxios.wait(() => {
  //   wrapper.update();
  //   expect(wrapper.find('Spinner').length).toEqual(1);
  //   done();
  //   wrapper.unmount();
  // });
});

it('bla', () => {
  console.log('b;a');
});