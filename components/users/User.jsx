import React from 'react';


class User extends React.Component {
      onClick(e) {
        e.preventDefault();
	const user = this.props.user;
      }
      render() {
            const user = this.props.user;
	    return (
	          <li>
	            <a onClick={this.onClick.bind(this)}>
		      {this.props.user.name}
		    </a>
		  </li>
	    )
      }
}

User.propTypes = {
    user: React.PropTypes.object.isRequired
}

export default User