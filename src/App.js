import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { subscribeToMessages } from './api';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
