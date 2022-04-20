import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom';
import { loginUser } from '../api';

/*Login component */    

const Login = ({ token, setToken, setUser, userMessage, setUserMessage }) => {
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
    <h2 className='page-message'>This is the login page.</h2>

    <hr></hr>
      <form onSubmit={handleSubmit}>
        <label className='label-name-pass' htmlFor='username'>Username: </label>
        <input
          id="user-name"
          placeholder="enter name here"
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)} />

        <label className='label-name-pass' htmlFor='password'>Password: </label>
        <input
          id="pass-word"
          placeholder="password"
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)} />

        <button className='form-buttons' type='submit' >Submit</button>

      </form>
      <h3>{userMessage}</h3>
      { !token || !username?  <h2>{userMessage}</h2> : setUserMessage('') }
    </div>
  
    )
};

export default Login;


/*
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJpZCI6ODE0LCJ1c2VybmFtZSI6IlNhbSIsImlhdCI6MTY1MDAzNjgwNywiZXhwIjoxNjUwNjQxNjA3fQ.
jxDXj6rY3haFGHhQ5gRNzOLsUFrI8GgLC47Q5k25pB8"
user: {id: 814, username: 'Sam'}
*/