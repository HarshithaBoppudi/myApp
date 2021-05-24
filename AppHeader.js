import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet} from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
     
        <Text style={styles.header}>SCHOOL ATTENDANCE</Text>
     
     
    );
  }
}
const styles=StyleSheet.create({
  header:{
    fontSize:20,
    marginTop:10,
    fontWeight:"bold",
    backgroundColor:"pink",
    width:350,
    height:40,
    textAlign:"center",
    textDecorationLine:"underline"
    
  }
})