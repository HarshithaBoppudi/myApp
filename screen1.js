import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import AppHeader from './components/AppHeader';
import db from '../config'

export default class FunnyScreen extends React.Component {
  constructor (){
    super()
    this.state={
      absentCount:1,
      presentCount:1
    }

  }
  summaryOfPresent=()=>{
  var present=this.state.presentCount+1
  this.setState({
    presentCount:present

  })

 db.ref("summary/"+"/").update({
   presentCount:this.state.presentCount
 })
  
}


summaryOfAbsent=()=>{
  var absent=this.state.absentCount+1
  this.setState({
    absentCount:absent

  })

 db.ref("summary/"+"/").update({
   absentCount:this.state.absentCount
 })
  
}
  render() {
    return (
      <View>
      <AppHeader/>

       <Text style={{marginLeft:30,marginTop:50,fontWeight:"bold"}}> PINKEY</Text>
            <TouchableOpacity  style={[styles.button,{backgroundColor:"aqua"}]} onPress={this.summaryOfPresent}>
            <Text>present</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={[styles.button,{backgroundColor:"aqua"}]}  onPress={this.summaryOfAbsent}>
            <Text>absent</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{marginTop:250,marginLeft:140}} onPress={()=>{
            this.props.navigation.navigate("screen2")
          }}>



         <Text style={{marginLeft:-110,marginTop:-220,fontWeight:"bold"}}> MIKE</Text>

         <TouchableOpacity  style={{marginLeft:-5, width:90,marginTop:-10,
              height:30, borderWidth:2,alignItems:"center",backgroundColor:"aqua",                               borderRadius:100}} onPress={this.summaryOfPresent}>
          <Text>present</Text>
            </TouchableOpacity>


            <TouchableOpacity  style={{marginLeft:-5, width:90,marginTop:5,
              height:30, borderWidth:2,alignItems:"center",backgroundColor:"aqua",                               borderRadius:100}}  onPress={this.summaryOfAbsent}>
            <Text>absent</Text>
            </TouchableOpacity>




           <Text style={{fontWeight:"bold",marginLeft:-120,marginTop:30}}> JACKSON</Text>

         <TouchableOpacity  style={{width:90,marginTop:5,
              height:30, borderWidth:2,alignItems:"center",backgroundColor:"aqua",                               borderRadius:100}} onPress={this.summaryOfPresent}>
          <Text>present</Text>
            </TouchableOpacity>


            <TouchableOpacity  style={{width:90,marginTop:5,
              height:30, borderWidth:2,alignItems:"center",backgroundColor:"aqua",                               borderRadius:100}}  onPress={this.summaryOfAbsent}>
            <Text>absent</Text>


            </TouchableOpacity>
             <Text style={{marginTop:60,fontWeight:"bold",fontSize:25,width:140,
              height:40, borderWidth:3,alignItems:"center",backgroundColor:"violet",                               borderRadius:100,justifyContent:"center",marginLeft:-40}}>SUMMARY
                </Text>
          </TouchableOpacity>
             
      </View>
    );
  }
}
const styles=StyleSheet.create({
  button:{
     
        width:90,
         height:30,
         marginLeft:140,
         marginTop:5,
         borderRadius:100,
         alignItems:"center",
        justifyContent:"center",
        borderWidth:2
  }
   
})

