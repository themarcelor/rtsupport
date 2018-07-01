import React from 'react';

class Message extends React.Component {
      onClick(e) {
        e.preventDefault();
	const message = this.props.message;
      }
      render() {
            const message = this.props.message;
	    return (
	          <li>
		      {this.props.message.messageData}
		  </li>
	    )
      }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired
}

export default Message