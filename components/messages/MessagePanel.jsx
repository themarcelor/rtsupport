import React from 'react';
import Message from './Message.jsx';

class MessagePanel extends React.Component {
      render() {
        var that = this;
        return (
	  <ul>
	  {
 	    this.props.messages.map( function(msg) {
	      console.log(msg);
	      console.log(msg.id);
	      console.log(msg.name);
	      console.log(that);
	      return (
	        <Message
	          message={msg}
	      	  key={msg.id}
                />
	      )
            })
	  }
	  </ul>
	)
      }
}

MessagePanel.propTypes = {
    messages: React.PropTypes.array.isRequired
}

export default MessagePanel