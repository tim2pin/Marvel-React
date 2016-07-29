import React,{Component} from 'react';

var welcomePage = {
  background: 'url(http://3.bp.blogspot.com/-nfxRQiJodr8/VRmDKSHyPhI/AAAAAAAASx4/mqP1OrRRr-Q/s1600/4-squirrel_girl.jpg)',
  // backgroundPosition: 'absolute',
  backgroundRepeat: 'no-repeat',
  fontSize: '80px',
  height: '800px',
  }

var link = {
  textDecoration: 'none',
  float: 'right',
  marginTop: '12%',
  marginRight: '30px',

}


export default class Welcome extends Component {
  render() {
    return (
      <div>
        <div style={welcomePage}>
        <h1><a style={link} href="main">Click To Enter</a></h1>
        </div>
      </div>
    );
  }
}
