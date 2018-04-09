import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';

import { subscribeToMessages } from './api';
import { guid } from './utils';

import BubbleList from './components/BubbleList';
import Sender from './components/Sender';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToMessages(msg => {
      const isMine = this.state.userId === msg.userId
      this.addMessage(msg, isMine);
    });

    this.state = {
      messages: [],
      userId: guid(),
    };
  }

  addMessage(msg, isMine=false){
    const { id, text } = msg;

    this.setState(currentState => { 
      const message = { id, timestamp: moment(), text, isMine };
      return { messages: [ ...currentState.messages, message ]}
    });
  }

  render() {
    const { messages, userId } = this.state;

    return (
      <MuiThemeProvider>
        <div className="App">
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
