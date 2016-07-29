import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Welcome from './Welcome.jsx'
import HeaderFetcher from './HeaderFetcher.jsx'
import ComicFetcher from './ComicFetcher.jsx';

/**
 * A stateful component to store our app
 */
class App extends Component {
  render() {
    return (
      <div>
        <HeaderFetcher />
        <ComicFetcher />
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    
    <Route path="/" component={Welcome} />
    <Route path="main" component={App} />
  


  </Router>,
  document.getElementById('root')
);
