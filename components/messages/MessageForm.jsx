import React from 'react';

class MessageForm extends React.Component {
      onSubmit(e) {
        e.preventDefault();
	const node = this.refs.message;
	const messageData = node.value;
	this.props.addUser(messageData);
	node.value = '';
      }
      render() {
      	       return (
	         <div className='form-group'>
                   <form onSubmit={this.onSubmit.bind(this)}>
		     <input
		       className='form-control'
		       type='text'
		       ref='message'
		       placeholder='type something here...'
		     />
		   </form>
		 </div>
	       )
      }
}

MessageForm.propTypes = {
    sendMessage: React.PropTypes.func.isRequired
}

export default MessageForm