import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';

import { subscribeToMessages } from './api';
import { guid, computeCommands } from './utils';
import { COMMANDS } from './constants';

import BubbleList from './components/BubbleList';
import Header from './components/Header';
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
          break;
          case COMMANDS.OOPS:
          break;
          default:
            this.addMessage(msg, isMine);
          break;
        }
      }
    });

    this.state = {
      messages: [],
      userId: guid(),
      theOtherNick: undefined,
    };
  }

  addMessage(msg, isMine=false){
    const { id, text } = msg;

    this.setState(currentState => { 
      const message = { id, timestamp: moment(), text, isMine };
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
