import React from 'react';
import User from './User.jsx';

class UserList extends React.Component {
      render() {
        var that = this;
        return (
	  <ul>
	  {
 	    this.props.users.map( function(u) {
	      console.log(u);
	      console.log(u.id);
	      console.log(u.name);
	      console.log(that);
	      return (
	        <User
	          user={u}
	      	  key={u.id}
                />
	      )
            })
	  }
	  </ul>
	)
      }
}

UserList.propTypes = {
    users: React.PropTypes.array.isRequired
}

export default UserList