// Playing with React
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
      setUserName(name) {
        let users = this.state.users;
	users.push({id: users.length, name});
	this.setState({
	  users: users
	});
	//TODO: send to the server
      }
      sendMessage(msg) {
        let messages = this.state.messages;
	let users = this.state.users;
	let createdAt = new Date;
	let author = users.length > 0 ? users[0].name : 'anonymous';
	messages.push({id: messages.length, msg, createdAt, author});
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
	      setUserName={this.setUserName.bind(this)}
	    />
	   </div>
	   <MessageSection
	     messages={this.state.messages}
	     activeChannel={this.state.activeChannel}
	     sendMessage={this.sendMessage.bind(this)}
	   />
	  </div>
	)
      }
}

export default App