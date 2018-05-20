import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component { //This is a class based component not function based like before

state = { albums: [] }; //Initializing the state

componentWillMount() { //LifeCycle method that is run whenever component is run
  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
   .then(response => this.setState({ albums: response.data })); //Sets the state to something else
}

renderAlbums() {
  //Map returns for every item in array albums
  return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
}

 render() { // A class based component needs a render method which returns JSX
   console.log(this.state);
   return (
     <View>
       {this.renderAlbums()}
     </View>
   );
 }
}

export default AlbumList;
