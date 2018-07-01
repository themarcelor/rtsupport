import React from 'react';

class UserForm extends React.Component {
      onSubmit(e) {
        e.preventDefault();
	const node = this.refs.userName;
	const userName = node.value;
	this.props.setUserName(userName);
	node.value = '';
      }
      render() {
      	       return (
                   <form onSubmit={this.onSubmit.bind(this)}>
		     <div className='form-group'>		   
		       <input
		         className='form-control'
		         type='text'
		         ref='userName'
		         placeholder='Set your name...'
		       />
		     </div>
		   </form>
	       )
      }
}

UserForm.propTypes = {
    setUserName: React.PropTypes.func.isRequired
}

export default UserForm