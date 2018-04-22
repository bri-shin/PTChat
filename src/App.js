/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
//Added by sshin
import Home from './components/Home';
import Chat from './components/Chat';
import Login from './components/Login/Login';
import {Firebase} from "./components/Firebase.js";

import{
  Router,
  Scene,
} from  'react-native-router-flux';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Scene key ='root' style={{paddingTop:64}}>
          <Scene key ='login' component = {Login} title='LOGIN'/>
          <Scene key ='home' component = {Home} title='Home'/>
          <Scene key ='chat' component = {Chat} title='Chat'/>
        </Scene>
      </Router>
    );
  }
}

export default App;
