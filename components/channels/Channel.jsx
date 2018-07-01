import React from 'react';


class Channel extends React.Component {
      onClick(e) {
        e.preventDefault();
	const setChannel = this.props.setChannel;
	const channel = this.props.channel;
	setChannel(channel);
      }
      render() {
            const channel = this.props.channel;
      	    const activeChannel = this.props.activeChannel;
      	    const active = channel === activeChannel ? 'active' : '';
	    return (
	          <li className={active}>
	            <a onClick={this.onClick.bind(this)}>
		      {this.props.channel.name}
		    </a>
		  </li>
	    )
      }
}

Channel.propTypes = {
    channel: React.PropTypes.object.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
}

export default Channel