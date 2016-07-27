
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/**
 * A stateful component to store our app
 */
class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

