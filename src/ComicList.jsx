import React, {Component} from 'react';
import ComicItem from './ComicItem';

/**
 * A stateful component to store our app
 */
export default class ComicList extends Component {
  render() {
    return (
      <div>
        {this.props.media.map(function(comic) {
          return (
            <ComicItem title={comic.title} img={comic.thumbnail.path + '.' + comic.thumbnail.extension} />
            )
        })}
      </div>
    )
  }
}