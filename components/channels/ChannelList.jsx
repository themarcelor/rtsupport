import React from 'react';
import Channel from './Channel.jsx';

/* testing
	    this.props.channels.map( chan => {
	      return <Channel
	       channel={chan}
	       key={chan.id}
	       setChannel={this.props.setChannel}
	      />
	    })
*/

class ChannelList extends React.Component {
      render() {
        // referencing that here to keep a reference to 'this' once we enter the map functions
	// This is not necessary when we use the fat arrow approach - in the comment section above
        var that = this;
        return (
	  <ul>
	  {
 	    this.props.channels.map( function(chan) {
	      console.log(chan);
	      console.log(chan.id);
	      console.log(chan.name);
	      console.log(that);
	      return (
	        <Channel
	          channel={chan}
	      	  key={chan.id}
	      	  setChannel={that.props.setChannel}
                />
	      )
            })
	  }
	  </ul>
	)
      }
}

ChannelList.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired
}

export default ChannelList