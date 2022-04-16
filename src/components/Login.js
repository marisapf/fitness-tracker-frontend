import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom';
import { loginUser } from '../api';

/*Login component */    

const Login = ({ setToken, setUser, setUserMessage }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    await loginUser( username, password, setToken, setUser, setUserMessage, history );

    setUsername('');
    setPassword('');
    
  };

  return ( 
    <div>
    <h3>This is the login page.</h3>

    <hr></hr>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: </label>
        <input
          id="user-name"
          placeholder="enter name here"
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)} />

        <label htmlFor='password'>Password: </label>
        <input
          id="pass-word"
          placeholder="password"
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)} />

        <button className='form-buttons' type='submit' >Submit</button>

      </form>

    </div>
  
    )
};

export default Login;

/*
//, userMessage, token,

{ !token || !username?  <h2>{userMessage}</h2> : setUserMessage('') }
       
  */