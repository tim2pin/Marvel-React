import React,{Component} from 'react';


export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <img style={{width:'80%', height:'850px', marginLeft:'10%', }} src="http://static.stereogum.com/uploads/2015/07/squirrelgirl-560x560.png" alt="oh no!" />
        <h4 style={{fontSize:55, textAlign:'center', }}>No Acorns Here!!!!!</h4>
        <div style={{fontSize:55, textAlign:'center', }}>this page doesnt exist... maybe....<a href="/">start over</a>.</div>
      </div>
    );
  }
}
