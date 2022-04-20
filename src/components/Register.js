import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom';
import { addNewUser } from '../api';

/*Register component */

const Register = ( {token, setToken, setUser, setUserMessage } ) => {

  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (token) {
      setUserMessage('You are already logged in.');
    } else {
    await addNewUser( username, password, setToken, setUser, setUserMessage, history);

    setUsername('');
    setPassword('');
    } 
  }
  
  return ( 
  
    <div>
        
      <h2 className='page-message'>This is the REGISTER page. Sign up here.</h2>
       
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
       
    </div>
    
    ) 
};

export default Register;

/*
 */