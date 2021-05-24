import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

import db from '../config'
export default class FunnyScreen extends React.Component {
  constructor(){
    super()
    this.state={
noOfPresent:0,
noOfAbsent:0
    }
    
  }
  summaryOfpresent(){
     db.ref('summary/presentCount').on('value',data=>{
       var p=data.val()
       this.setState({
         noOfPresent:p
       })
     })
}
summaryOfAbsent(){
     db.ref('summary/absentCount').on('value',data=>{
       var a=data.val()
       this.setState({
         noOfAbsent:a
       })
     })
}
componentDidMount(){
  this.summaryOfpresent()
  this.summaryOfAbsent()
}
render(){
  return(
    <View>
            <Text style={{fontWeight:"bold",fontSize:30,marginLeft:70}}>SUMMARY</Text>
    <Text style={{fontWeight:"bold",marginTop:50}}>Number Of Students Present: {this.state.noOfPresent}</Text>
     <Text style={{fontWeight:"bold"}}>Number Of Students Absent: {this.state.noOfAbsent}</Text>
    </View>
  )
}
}
