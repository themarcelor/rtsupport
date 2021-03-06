import React from 'react';

class ChannelForm extends React.Component {
      onSubmit(e) {
        e.preventDefault();
	const node = this.refs.channel;
	const channelName = node.value;
	this.props.addChannel(channelName);
	node.value = '';
      }
      render() {
      	       return (
	         <div className='form-group'>
                   <form onSubmit={this.onSubmit.bind(this)}>
		     <input
		       className='form-control'
		       type='text'
		       ref='channel'
		       placeholder='Add Channel'
		     />
		   </form>
		 </div>
	       )
      }
}

ChannelForm.propTypes = {
    addChannel: React.PropTypes.func.isRequired
}

export default ChannelForm