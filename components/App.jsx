import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

class App extends React.Component {
      constructor(props) {
        super(props);
	this.state = {
	  channels: [],
	  activeChannel: {},
	  users: [],
	  messages: []
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
      addUser(name) {
        let users = this.state.channels;
	users.push({id: users.length, name});
	this.setState({
	  users: users
	});
	//TODO: send to the server
      }
      sendMessage(msg) {
        let messages = this.state.messages;
	messages.push({id: messages.length, msg});
	this.setState({
	  messages: messages
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
	      activeChannel={this.state.activeChannel}	      
	      addChannel={this.addChannel.bind(this)}
	      setChannel={this.setChannel.bind(this)}
	    />
            <UserSection
	      users={this.state.users}
	      addUser={this.addUser.bind(this)}
	    />
	   </div>
	   <MessageSection
	     messages={this.state.messages}
	     sendMessage={this.sendMessage.bind(this)}
	   />
	  </div>
	)
      }
}

export default App