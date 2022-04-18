import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
    GetSingleActivity,
    SingleActivityView,
    MyActivities
                } from "./index";

const App = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [myRoutines, setMyRoutines] = useState([]);
  const [myActivities, setMyActivities] = useState([]);
  
  
  return (
    <div >
      <Title />

      <BrowserRouter>
        <div>
      
        <Route exact path="/">
          <Home
           user={user}
           userMessage={userMessage}
           token={token}
          />
        </Route>

        <Link to="/" style={{ margin: "20px" }}> Home</Link>   
        <Link to="/activities" style={{ margin: "20px" }}>Activities</Link>
        <Link to="/routines" style={{ margin: "20px" }}>Routines</Link>
        <Link to="/my_routines" style={{ margin: "20px" }}>My Routines</Link>
        <Link to="/register" style={{ margin: "20px" }}>Sign up</Link>

        {token ?
        <Link to="/login" style={{ margin: "20px" }}
        onClick={()=> setToken('')}>Log out</Link>
        : <Link to="/login" style={{ margin: "20px "}}>Log in</Link> }

        <Route path="/login">
            <Login
            user={user}
            setUser={setUser}
            token={token}
            setToken={setToken}
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            />
        </Route>

        <Route path="/register">
            <Register 
             user={user}
             setUser={setUser}
             token={token}
             setToken={setToken}
             userMessage={userMessage}
             setUserMessage={setUserMessage}/>
        </Route>

        <Route exact path='/my_routines'>
            <MyRoutines
            user={user}
            setUser={setUser}
            token={token}
            setToken={setToken}
            myRoutines={myRoutines}
            setMyRoutines={setMyRoutines}
            />
        </Route>

        <Route path='/update/:routineId'>
          <UpdateRoutine token={token} myRoutines={myRoutines} />
        </Route>  

        <Route path='/edit/:activityId'>
          <UpdateActivity token={token} activities={activities} />
        </Route> 

        <Route path='/my_routines/update/:routineId'>
          <MyActivities token={token} myActivities={myActivities}/>
        </Route>  

        <Route exact path="/activities">
            <Activities
            token={token}
            activities={activities}
            setActivities={setActivities}
            />
        </Route>

        {/*<Route exact path="/activities/:activityId">
            <GetSingleActivity />
        </Route> */}

        {/*<Route path="/activities/:activityId">
            <SingleActivityView />
        </Route> */}

        <Route exact path="/routines">
          <Routines
           routines={routines}
           setRoutines={setRoutines}
          />
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

/* 
 <Route exact path="/routines/:routineId">
            <SingleRoutineView
              routines={routines}
            />
  </Route>

  <Route exact path="/routines/:routineId">
            <GetSingleRoutine />
  </Route>


*/