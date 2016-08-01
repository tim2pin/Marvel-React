import React, {Component} from 'react';
import Header from './Header.jsx';
import md5 from 'md5';

function fetchJSON(url) {
  return fetch(url).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json();
    } else {
      console.log("Oops, we haven't got JSON!");
    }
  });
}

//calculates hash, calculates url, and then gets the json from the url
function marvelFactory(config) {
  return function(path) {
    var timestamp = new Date().getTime();
    var hash = md5(timestamp + config.privateKey + config.publicKey);
    var url = config.hostname + '/v' + config.version + '/public' + path + '?limit=100&apikey=' + config.publicKey + '&ts=' + timestamp + '&hash=' + hash;
    console.log(url);

    return fetchJSON(url);
  }
}

// Get an instance of the marvel api
var marvel = marvelFactory({
  hostname: 'http://gateway.marvel.com',
  publicKey: '11baddac3441be34e5ab00c3395622ae',
  privateKey: 'c0409eaf5b34286b2722603cd90db4cb71cf200c',
  version: '1'
});



export default class ComicFetcher extends Component {
  constructor(props) {  
    super(props);      
      this.state={
        media: []    
      }
      // console.log(media);
      this.getComics();
    }


getComics(){
      marvel('/characters/1010860').then((response) => {
        if (response && response.status === "Ok") {
          this.setState({media: response.data.results});
          console.log(this.state.media);
          console.log("we have media!!!!")
        } else if (response && response.Response === "False") {
          //none found
        } else {
          console.error('Unknown error.');
        }
      });
    }

  render() {
    return (
      <div>
        <Header media={this.state.media} />
      </div>
    );
  }
}
