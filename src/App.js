import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { subscribeToMessages } from './api';
import { guid } from './utils';

import Sender from './components/Sender';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToMessages(msg => {
    });

    this.state = {
      messages: [],
      userId: guid(),
    };
  }

  render() {
    const { messages, userId } = this.state;

    return (
      <MuiThemeProvider>
        <div className="App">
          <main className="App-content">
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
