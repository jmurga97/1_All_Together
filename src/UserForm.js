import React, {Component} from 'react';

class UserForm extends Component{
	state = {
    	firstName:'',
      	lastName:'',
      	username:''
    }
  
  	handleChange = (event) => {
      	
    	this.setState({
        	[event.target.name]: event.target.value
        });
    }
  	addUser = (event) => {
    	event.preventDefault();
      	const user = {
        	...this.state,
          	gamesPlayed: 0
        }
      	this.props.onAddUser(user)
    }
  
  	inputIsEmpty = () => {
    	return (this.state.lastName === '' && this.state.firstName === '' && this.state.username === '')
    }
  	render(){
  
    	return(
    	<div>
        	<form onSubmit={this.addUser}>
          		<input
            		type="text"
            		placeholder="Enter First Name"
					name="firstName"
            		value={this.state.firstName}
            		onChange={this.handleChange}
          		/>
				<input
            		type="text"
            		placeholder="Enter Last Name"
					name="lastName"
            		value={this.state.lastName}
            		onChange={this.handleChange}
          		/>
				<input
            		type="text"
            		placeholder="Enter your username"
					name="username"
            		value={this.state.username}
            		onChange={this.handleChange}
          		/>
          		<button disabled={this.inputIsEmpty()}>Add</button>
        	</form>
      </div>
    )
    }
}
export default UserForm