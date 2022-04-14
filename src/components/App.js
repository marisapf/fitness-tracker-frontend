import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Title, Home, Login, Register, Activities, Routines } from "./index";

const App = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [userMessage, setUserMessage] = useState('');
  //const [activities, setActivities] = useState([]);
 //const [ routines, setRoutines ] = useState([]);
  
  return (
    <div >
      <Title />

      <BrowserRouter>
        <div>
      
        <Route path="/home">
          <Home />
        </Route>

        <Link to="/home" style={{ margin: "20px" }}> Home</Link>   
        <Link to="/activities" style={{ margin: "20px" }}>Activities</Link>
        <Link to="/routines" style={{ margin: "20px" }}>Routines</Link>
        <Link to="/login" style={{ margin: "20px" }}>Log in</Link>
        <Link to="/register" style={{ margin: "20px" }}>Sign up</Link>

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

        <Route path="/activities">
            <Activities/>
        </Route>

        <Route path="/routines">
            <Routines />
        </Route>

       

      </div>
      </BrowserRouter>
 
    </div>
  );
};

export default App;

/* 

 <Route exact path="/routines/:routineId">
            <GetSingleRoutineView />
        </Route>
 <Route exact path="/routines/:routineId">
            <GetSingleRoutine />
        </Route>


<Home user={user} userMessage={userMessage} token={token} />

          <Route exact path="/login/:method">
            <Login
              user={user}
              setUser={setUser}
              token={token}
              setToken={setToken}
              userMessage={userMessage}
              setUserMessage={setUserMessage}
            />
          </Route> 



*/