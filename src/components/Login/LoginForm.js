import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

export default class Login extends Component{
  render(){
    return(
      <View style={styles.container}>
        <StatusBar
            barStyle="light-content"
        />
        <TextInput
          placeholder= "username or email"
          placeholderTextColor = "rgba(255,255,255,0,7)"
          returnKeyType="next"
          onSubmitEditing= {() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style = {styles.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor = "rgba(255,255,255,0,7)"
          returnKeyType="go"
          secureTextEntry
          style = {styles.input}
          ref= {(input) => this.passwordInput = input}
        />

        <TouchableOpacity style={styles.buttonContiner}>
          <Text style = {styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 20

  },
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: "#FFFF",
    paddingHorizontal: 10,
  },
  buttonContiner:{
    backgroundColor:'#de661d',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color:'rgba(255,255,255,0.9)',
    fontWeight: '700',
  }
});
