// Chat Screen

import React, {Component} from 'react';
import Backend from '../Backend';
import {GiftedChat} from 'react-native-gifted-chat';

export default class Chat extends React.Component {
  state = {
    messages: []
  };

  componentWillMount(){
    this.setState({
      messages:[
        {
          _id: 1,
          text: "Hello User",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native'
            // avatar
          },
        },
      ],
    })
  }

  render(){
    return(
      <GiftedChat
        messages={this.state.messages}
        onSend = {(message)=>{
          //send message to yout backend
          Backend.sendMessage(message);
        }}    //what happens when message sent
        user={{
          _id: Backend.getUid(),                  //identification
          name: this.props.name,
        }}
      />
    );
  }
  componentDidMount(){
    Backend.loadMessages((message)=>{
      this.setState((previousState) =>{
        return{
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount(){
    Backend.closeChat();
  }
}

//for default values
  // chat.defaultProps = {
  //   names: 'SeungEun',
  // };
  //
  // chat.propTypes={
  //   names: React.PropTypes.string,
  // };

// export default Home;
