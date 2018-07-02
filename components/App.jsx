// Playing with React
import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

import Websocket from 'ws';
//import WebSocketClient from 'websocket';

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

      /* interaction with server-side starts here */
      componentDidMount() {
        var ws = this.ws = new WebSocket('wss://echo.websocket.org/');
        //let ws = new Websocket('ws://echo.websocket.org');
	ws.onmessage = this.message.bind(this);
	ws.onopen = this.open.bind(this);
	ws.onclose = this.close.bind(this);
      }
      message(e) {
        console.log('received msg');
        const event = JSON.parse(e.data);
	if(event.name === 'channel add') {
 	  this.newChannel(event.data);
	}
      }
      open(e) {
        console.log('connected to web socket!');
        this.setState({ connected: true});
      }
      close(e) {
        this.setState({ connected: false});      
      }
      newChannel(channel) {
        let channels = this.state.channels;
	channels.push(channel);
	this.setState({
	  channels: channels
	});
      }
      addChannel(name) {
        let channels = this.state.channels;
	//TODO: send to the server
	let msg = {
	  name: 'channel add',
	  data: {
	    id: channels.length,
	    name
	  }
	};
	console.log('sending web socket msg now');
	this.ws.send(JSON.stringify(msg));
      }
      setChannel(activeChannel) {
        this.setState({
	  activeChannel: activeChannel
	});
	// TODO: Get channels messages
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