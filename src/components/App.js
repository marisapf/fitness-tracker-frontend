import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { fetchAllActivities } from '../api';
import  './index.css' 

import { 
    Title, 
    Home, 
    Login, 
    Register, 
    Activities, 
    Routines,
    MyRoutines,
    UpdateRoutine,
    GetSingleRoutine,
    SingleRoutineView,
    UpdateActivity,
    MyActivities  } from "./index";
                
const App = () => {

  const userAuth = JSON.parse(localStorage.getItem('user'));
  const userToken = JSON.parse(localStorage.getItem('token'));
  const [user, setUser] = useState(userAuth);
  const [token, setToken] = useState(userToken);
  const [userMessage, setUserMessage] = useState('');
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [myRoutines, setMyRoutines] = useState([]);

  /*Sets activities upon loading of App*/
  useEffect(() => {
     const getData = async () => {
       const apiResponse = await fetchAllActivities();
       setActivities(apiResponse);
     }
     getData();
   }, [setActivities]);
    
   const Logout = () => {
    setToken(null);
    setUser(null);
    setUserMessage("You have successfully logged out")
    localStorage.clear();
  }
  
  return (
    <div >
      <Title />

      <BrowserRouter>
        <div>
      
      <Route exact path="/">
        <Home user={user} userMessage={userMessage} token={token}/>
      </Route>

      <Link to="/" className='link'> Home</Link>
      <Link to="/activities" className='link'>Activities</Link>
      <Link to="/routines" className='link'>Routines</Link>
      <Link to="/my_routines" className= 'link'>My Routines</Link>
      <Link to="/register" className='link'>Sign up</Link>

      {token ?
      <Link to="/login" 
      onClick={Logout} className='link'>Log out</Link>
      : <Link to="/login" className='link'>Log in</Link> }

      <Route path="/login">
        <Login user={user} setUser={setUser} token={token} setToken={setToken}
          userMessage={userMessage} setUserMessage={setUserMessage} />
      </Route>

      <Route path="/register">
        <Register user={user} setUser={setUser} token={token} setToken={setToken}
          userMessage={userMessage} setUserMessage={setUserMessage}/>
        </Route>

        <Route exact path='/my_routines'>
          <MyRoutines user={user} setUser={setUser} token={token} setToken={setToken}
            myRoutines={myRoutines} setMyRoutines={setMyRoutines} activities={activities}/>
        </Route>

        <Route path='/update/:routineId'>
          <UpdateRoutine token={token} myRoutines={myRoutines}/>
        </Route>  

        <Route path='/edit/:activityId'>
          <UpdateActivity token={token} activities={activities}/>
        </Route> 

        <Route path='/my_routines/update/:routineId'>
          <MyActivities token={token} myRoutines={myRoutines} activities={activities}/>
        </Route>  

        <Route exact path="/activities">
          <Activities token={token} activities={activities} setActivities={setActivities}/>
        </Route>

        <Route exact path="/routines">
          <Routines routines={routines} setRoutines={setRoutines}/>
        </Route>

        <Route exact path="/routines/:routineId">
            <GetSingleRoutine />
        </Route>

        <Route exact path="/routines/:routineId">
            <SingleRoutineView />
        </Route>

      </div>
      </BrowserRouter>
 
    </div>
  );
};

export default App;

