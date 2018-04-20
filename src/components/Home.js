//Home Screen

import React, {Component} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import{
  Actions,
} from 'react-native-router-flux';

  //Input the name of STATE
class Home extends React.Component {
  state = {
    name:'',
  }
  render(){
    return(
      <View>
        <Text style = {styles.title}>
          Enter Your Name:
        </Text>
        <TextInput
          style={styles.nameInput}
          placeholder= 'Oh Seung Eun'
          onChangeText={(text)=> {
            this.setState({
              name: text,
            });
          }}
          value = {this.state.name}
        />
        <TouchableOpacity
          onPress={()=>{
            //navigate to second screen, and pass the name
            Actions.chat({
              names:this.state.name,
            });
          }}

          >  //button
          <Text style = {styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop:20,
    marginLeft: 20,
    fontSize: 20,
  },
  nameInput: {
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin:20,
  },
  buttonText:{
    marginLeft:25,
    fontSize:20,
  }
});

export default Home;
