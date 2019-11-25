import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/



/*const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];*/

class App extends Component   {
  state = {
    messages: [], 
    users:  [{ username: 'Amy' }, { username: 'John' }]
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  createMessages = (message) => {
    this.setState({messages: [...this.state.messages, message]})
  } 

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<div style={{display: 'flex'}}>
            {this.state.users.map(user => {
             return <Chat user={user} messages={this.state.messages} createMessages={this.createMessages}/>
            })}
         </div>
      </div>
    );
  }
}

export default App;
