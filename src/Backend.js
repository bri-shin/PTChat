import firebase from 'firebase';

class Backend{
  uid = '';
  messageRef=null;
  //initialize Firebase backend
  constructor(){
    firebase.initializeApp({
      apiKey: "AIzaSyCN2bDJs70OGg0URSZ3Z1FW190e58IQaJ4",
      authDomain: "ptchat-0809.firebaseapp.com",
      databaseURL: "https://ptchat-0809.firebaseio.com",
      projectId: "ptchat-0809",
      storageBucket: "ptchat-0809.appspot.com",
      messagingSenderId: "753784170190"
    });
    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setUid(user.uid);
      } else{
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });
  }
  setUid(value){
    this.uid = value;
  }
  getUid(){
    return this.uid;
  }
  //  Retrieve the messages from the backend
  loadMessages(callback) {
    this.messagesRef = firebase.database().ref('messages');
    this.messagesRef.off();
    const onReceieve = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceieve);
  }

  //  send the message to backend
  sendMessage(message){
    for(let i=0; i<message.length; i++){
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  closeChat(){
    if(this.messagesRef){
      this.messagesRef.off();
    }
  }
}

export default new Backend();
