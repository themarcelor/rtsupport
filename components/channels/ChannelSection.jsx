import React from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

// trying the new SPREAD Operator from Babel {..this.props} which will inject each property as a parameter of that HTML tag.

class ChannelSection extends React.Component {
      
      render() {
      	       return (
	         <div className='support panel panel-primary'>
		   <div className='panel-heading'>
		     <strong>Channels</strong>
		   </div>
		   <div className='panel-body channels'>
		     <ChannelList
		       channels={this.props.channels}
		       setChannel={this.props.setChannel}
		       activeChannel={this.props.activeChannel}
		     />
		     <ChannelForm {...this.props} />
		   </div>		  
		 </div>
	       )
      }
}

ChannelSection.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    addChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
}

export default ChannelSection