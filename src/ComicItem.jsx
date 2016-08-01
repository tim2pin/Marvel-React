import React, {Component} from 'react';

var comicBoxStyle = {
  display: 'inline-block',
  width: '33%',
  textAlign: 'center',
  marginBottom: '100px',

}

var imgStyle = {
  display: 'block',
  height: '550px',
  width: '100%',

}

var comicTitle = {
  display: 'inline-block',
  fontSize: '30px',
  }

export default class ComicItem extends Component {
  render() {
    return (
      <div style={comicBoxStyle}>
        <img style={imgStyle} src={this.props.img} />
        <div style={comicTitle}>{this.props.title}</div>
      </div>
    )
  }
}
