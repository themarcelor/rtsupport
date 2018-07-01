import React from 'react';

class MessageForm extends React.Component {
      onSubmit(e) {
        e.preventDefault();
	const node = this.refs.message;
	const message = node.value;
	this.props.sendMessage(message);
	node.value = '';
      }
      render() {
      	       let input;
	       if(this.props.activeChannel.id !== undefined) {
	        input = (
		     <input
		       className='form-control'
		       type='text'
		       ref='message'
		       placeholder='type something here...'
		     />
	       )
	      }
	      return (
	        <form onSubmit={this.onSubmit.bind(this)}>
		  <div className='form-group'>
		    {input}
		  </div>
		</form>
	      )
      }
}

MessageForm.propTypes = {
    sendMessage: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
}

export default MessageForm