
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCN2bDJs70OGg0URSZ3Z1FW190e58IQaJ4",
  authDomain: "ptchat-0809.firebaseapp.com",
  databaseURL: "https://ptchat-0809.firebaseio.com",
  projectId: "ptchat-0809",
  storageBucket: "ptchat-0809.appspot.com",
  messagingSenderId: "753784170190"
};

export default class Firebase{
  static auth;
  static init(){
    firebase.initializeApp(config);
    Firebase.auth = firebase.auth();
  }
}
