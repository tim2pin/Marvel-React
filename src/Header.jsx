import React, {Component} from 'react';
import HeaderItem from './HeaderItem.jsx';

/**
 * A stateful component to store our app
 */
export default class Header extends Component {
  render() {
    return (
      <div>
        {this.props.media.map(function(comic) {
          return (
            <HeaderItem name={comic.name} img={comic.thumbnail.path + '.' + comic.thumbnail.extension} />
            )
        })}
      </div>
    )
  }
}