import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends React.Component {
      constructor(props) {
        super(props);
	this.state = {
	  channels: []
	};
      }
      addChannel(name) {
        let channels = this.state.channels;
	channels.push({id: channels.length, name});
	this.setState({
	  channels: channels
	});
	//TODO: send to the server
      }
      setChannel(activeChannel) {
        this.setState({
	  activeChannel: activeChannel
	});
	// TODO: Get channels messages
      }
      render() {
        return (
	  <div className='app'>
	   <div className='nav'>
	    <ChannelSection
	      channels={this.state.channels}
	      addChannel={this.addChannel.bind(this)}
	      setChannel={this.setChannel.bind(this)}
	    />
	   </div>  
	  </div>
	)
      }
}

export default App