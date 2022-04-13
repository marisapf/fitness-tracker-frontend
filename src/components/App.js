import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//import './App.css';

import {
  Title,
  Home,
  Login

} from './index';

const App = () => {

  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [userMessage, setUserMessage] = useState('')

  return (
   <div className='App'>
  
  <Title />;
    <BrowserRouter>
     <div>
     <Link to="/" style={{ margin: "20px" }}>Home</Link>

     <Link to="/login/login" style={{ margin: "20px" }}>Log in</Link>
     <Link to="/login/register" style={{ margin: "20px" }}>Sign up</Link>

     </div>
    </BrowserRouter>


  </div>
  );
};

export default App;
