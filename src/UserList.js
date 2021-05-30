import React from 'react';

function UserList(props){
  const usuarios = props.usuarios
	return(
    	<ol>
      		{usuarios.map( (user) => (
    			<li key={user.username}> {user.username} ha jugado {user.gamesPlayed} juegos  </li>
    		))}
      	</ol>
    )
}

export default UserList