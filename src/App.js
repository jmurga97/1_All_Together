import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm.js'
import UserList from './UserList.js'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
  	users: [],
  }
  

  checkUniqueUser(prevUsers,actualUser){
	let userIsUnique = true
  	prevUsers.forEach( (usuario) => {
        if(usuario.username === actualUser.username){
            userIsUnique = false
        }
    })
    return userIsUnique;
  }
  
  handleAddUser = (user) =>	{
  	this.setState( (prevState) => {
      	if(this.checkUniqueUser(prevState.users,user)){
        	return {users: [...prevState.users,user]}
        }else{
        	alert('El Usuario debe ser unico')
        }
    })
  }
  
  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Exercise 1 - All Together</h1>
        </header>
		<UserForm onAddUser = {this.handleAddUser} />
		<UserList usuarios = {this.state.users}/>
      </div>
    );
  }
}

export default App;
