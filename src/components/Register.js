import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom';
import { addNewUser } from '../api';


/*Register component */

const Register = ( {token, setToken, setUser, setUserMessage, userMessage} ) => {

  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    await addNewUser( username, password, setToken, setUser, setUserMessage, history);

    setUsername('');
    setPassword('');
    } 
   
  
  return ( 
    <div>
        <h3>This is the REGISTER page. Sign up here.</h3>
       
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

        { !token || !username?  <h2>{userMessage}</h2> : setUserMessage('') }

      </form>

    </div>
    )
};

export default Register;

/*
const handleSubmit = async (event) => {
    event.preventDefault();

    await addNewUser( username, password, setToken, setUser, setUserMessage, history);

    setUsername('');
    setPassword('');
    
  }


*/