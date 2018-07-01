import React from 'react';

class Channel extends React.Component {
      onClick(e) {
        e.preventDefault();
	const {setChannel, channel} = this.props;
	setChannel(channel);
      }
      render() {
      	       const channel = this.props.channel;
	       return (
	       	      <li>
			<a onClick={this.onClick.bind(this)}>
			 {this.props.channel.name}
		        </a>
		      </li>
	       )
      }
}

Channel.propTypes = {
    channel: React.PropTypes.object.isRequired,
    setChannel: React.PropTypes.func.isRequired
}

export default Channel