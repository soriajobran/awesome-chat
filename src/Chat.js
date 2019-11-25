import React from 'react';
import ChatLog from './ChatLog';
import ChatMessage from './ChatMessage';

const Chat = props => {
  
    const {user, messages, createMessages} = props;
    return(
      <div className="container" >
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{user.username}</div>
          <ChatLog user={user} messages={messages}/>
          <ChatMessage user={user} createMessages={createMessages}/>
		</div>
	</div>
    );
}

export default Chat;