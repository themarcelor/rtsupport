import React from 'react';
import fecha from 'fecha';

class Message extends React.Component {
      onClick(e) {
        e.preventDefault();
	const message = this.props.message;
      }
      render() {
            const message = this.props.message;
	    const createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD/YYYY');
	    return (
	          <li className='message'>
		    <div className='author'>
		      <strong>{message.author}</strong>
		      <i className='timestamp'>{createdAt}</i>
		    </div>
		    <div className='body'>{message.msg}</div>
		  </li>
	    )
      }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired
}

export default Message