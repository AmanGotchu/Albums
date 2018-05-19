import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component { //This is a class based component not function like before

 render() { // A class based component needs a render method which returns JSX
   return (
     <View>
       <Text>Album List!!</Text>
     </View>
   );
 }
 
}


export default AlbumList;
