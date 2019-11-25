import React, {Component} from 'react';

class ChatMessage extends Component {
  state = {
    text: ''
  }

  onInputChange = (e) => {
    this.setState({text: e.target.value})
  }

	createUserMessage = () => {
      const {username} = this.props.user;
      const {text} = this.state;
      return {username, text}
    }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.createMessages(this.createUserMessage());
  }

	isDisabled = () => {
      return this.state.text === '';
    }

  render() {
    return (
      <div>
         <div>
           <form className="input-group" onSubmit={this.onFormSubmit}>
           <input type="text" className="form-control" placeholder="Enter your message..."
       			value={this.state.text}
      			onChange={this.onInputChange}
       		/>
             <div className="input-group-append">
             <button className="btn submit-button" disabled={this.isDisabled()}>
            SEN              
    		</button>
          </div>
        </form>
      </div>
     </div>
    );
  }
}

export default ChatMessage;

