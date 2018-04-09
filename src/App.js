import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';

import { 
  subscribeToMessages, 
  subscribeToDeleteMessages, 
  deleteMessage,
} from './api';
import { guid, computeCommands } from './utils';
import { COMMANDS } from './constants';

import Header from './components/Header';
import BubbleList from './components/BubbleList';
import Sender from './components/Sender';

import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    subscribeToMessages(msg => {
      const isMine = this.state.userId === msg.userId
      const command = computeCommands(msg.text);

      if (!command){
        this.addMessage(msg, isMine);
      }
      else{
        switch(command[0]){
          case COMMANDS.NICK:
            if(!isMine){
              this.setNick(msg.text.replace(COMMANDS.NICK, ''))
            }
          break;
          case COMMANDS.THINK:
            this.addMessage({ ...msg, text: msg.text.replace(COMMANDS.THINK, '') }, isMine, true);
          break;
          case COMMANDS.OOPS:
            if(isMine){
              this.emitDeleteId();
            }
          break;
          default:
            this.addMessage(msg, isMine);
          break;
        }
      }
    });

    subscribeToDeleteMessages(msgId => {
      this.setState(currentState => {
        const filteredMessages = currentState.messages.filter(m => m.id !== msgId);
        return { messages: filteredMessages };
      })
    });

    this.state = {
      messages: [],
      userId: guid(),
      theOtherNick: undefined,
    };
  }

  emitDeleteId(){
    const { messages } = this.state;
    const myMessages = messages.filter(m => m.isMine);
    if(myMessages.length > 0){
      myMessages.sort((a, b) => a.timestamp - b.timestamp)
      deleteMessage(myMessages[myMessages.length - 1].id)
    }
  }

  addMessage(msg, isMine=false, isThink = false){
    const { id, text } = msg;

    this.setState(currentState => { 
      const message = { id, timestamp: moment(), text, isMine, isThink };
      return { messages: [ ...currentState.messages, message ]}
    });
  }

  setNick(nick){
    this.setState({ theOtherNick: nick });
  }

  render() {
    const { messages, userId, theOtherNick } = this.state;

    return (
      <MuiThemeProvider>
        <div className="App">
          {theOtherNick && <Header nick={theOtherNick} />}
          <main className="App-content">
            <BubbleList messages={messages} />
          </main>
          <footer>
            <Sender userId={userId} />
          </footer>
        </div>
      </MuiThemeProvider>
    );      
  }
}

export default App;
