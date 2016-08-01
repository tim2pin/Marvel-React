import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Welcome from './Welcome.jsx'
import NoMatch from './NoMatch.jsx';
import HeaderFetcher from './HeaderFetcher.jsx'
import ComicFetcher from './ComicFetcher.jsx';

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
    <Route path="*" component={NoMatch} />
  
  </Router>,
  document.getElementById('root')
);
