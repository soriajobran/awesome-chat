import React from 'react';


const ChatLog = props => {
  
  const {messages, user} = props;
    return (
      <div>
      	<ul className="message-list">
         {messages.map((message, index) => (
               <li
                  key={index}
                  className={message.username === user.username ? 'message sender' : 'message recipient'}>
                  <p>{`${message.username}: ${message.text}`}</p>
               </li>
            ))}
          </ul>
		</div>
    );
}

export default ChatLog;