import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';

import { sendMessage } from '../../api';
import { guid } from '../../utils';
import './index.css';

class Sender extends Component {
    constructor(props) {
      super(props);

      this.state = {
        inputValue: ''
      };
    }
  
    handleSend(){
      const { inputValue } = this.state
  
      if(inputValue !== ''){
        sendMessage({ id: guid(), userId: this.props.userId, text: inputValue })
        this.setState({ inputValue: '' });
      }
    }
  
    handleChange(e){
      this.setState({inputValue: e.target.value});
    }

    handleKeyPress(e){
        var code = (e.keyCode ? e.keyCode : e.which);
        if(code === 13) { //Enter keycode
            this.handleSend()
        }
    }
  
    render() {
      return (
        <div className="Sender__container">
            <TextField
                className="input-message"
                value={this.state.inputValue}
                hintText="Type your message"
                fullWidth={true}
                onChange={e => this.handleChange(e)}
                onKeyPress={e => this.handleKeyPress(e)}
                />
            <FloatingActionButton
                className="send-button"
                secondary={true} 
                onClick={() => this.handleSend() }
                >
                <ContentSend />
            </FloatingActionButton>
        </div>
      );      
    }
  }
  
export default Sender;
  
