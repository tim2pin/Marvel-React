import React, {Component} from 'react';

var headerboxStyle = {
  marginBottom: '100px',
}

var header = {
  textAlign: 'center',
  fontSize: '100px',
}

var headerIMG = {
  height: '750px',
  width: '33%',
}


export default class HeaderItem extends Component {
  render() {
    return (
      <div style={headerboxStyle}>
        <div style={header}>
          <img style={headerIMG} src={this.props.img} />
          <div>{this.props.name}</div>
        </div>
      </div>
    )
  }
}
