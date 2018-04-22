//index.js

import React, {Component } from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native';
import App from './src/App';
import Login from './src/components/Login/Login'
AppRegistry.registerComponent('PTChat', () => App);

export default class PTChat extends Component{
  render(){
    return(
      <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1.0)',
  }
})
