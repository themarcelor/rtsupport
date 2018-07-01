import React from 'react';
import MessageForm from './MessageForm.jsx';
import MessagePanel from './MessagePanel.jsx';

class MessageSection extends React.Component {
      
      render() {
      	       return (
	         <div className='messages-container panel panel-primary'>
		   <div className='panel-heading'>
		     <strong>Messages</strong>
		   </div>
		   <div className='panel-body messages'>
		     <MessagePanel
		       messages={this.props.messages}
		     />
		     <MessageForm {...this.props} />
		   </div>		  
		 </div>
	       )
      }
}

MessageSection.propTypes = {
    messages: React.PropTypes.array.isRequired,
    sendMessage: React.PropTypes.func.isRequired
}

export default MessageSection