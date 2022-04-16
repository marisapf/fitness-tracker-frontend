import React, { useEffect, useState } from "react";
import CreateRoutine from "./CreateRoutine";
import CreateActivity from "./CreateActivity";
import { fetchRoutinesByUsername, updateRoutine, deleteRoutine } from "../api";

const MyRoutines = ({ token, user, setRoutines, setActivities }) => {
  
const [myRoutines, setMyRoutines] = useState([]);
//const [routine, setRoutine] = useState({});
const [routineId, setRoutineId] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetchRoutinesByUsername(token, user.username);
      setMyRoutines(apiResponse);

      console.log("my routines, ", apiResponse); //an array of routines by user
      console.log("my routines, routines", myRoutines);
    };
    getData();
  }, []);

  const handleSubmit = async(event) =>{
        event.preventDefault();

        await updateRoutine(token, setRoutineId, routineId)

        await deleteRoutine(token, routineId);
  }

  return (
    <div id="my-routines-page">
      {token ? (
        <>
          <h2>{user.username + "'s "} Routines</h2>
          <CreateRoutine token={token} setRoutines={setRoutines} />
          <CreateActivity token={token} setActivities={setActivities} />

          {myRoutines.map((routine) => (
            <div
              key={routine.id}
              id="single-routine"
              style={{ border: "1px solid black", background: "bisque" }}
            >
              <h4>
                <u>Name of routine: </u>
                {routine.name}
              </h4>
              <h4>
                <u>Goal: </u>
                {routine.goal}
              </h4>
              <h4>
                <u>Routine Id:</u> {routine.id}
              </h4>

              {routine.activities.map((activity) => {
                return (
                  <div id="routine-card"
                   key={activity.id}>
                    <h2>{activity.name}</h2>
                    <p>Description: {activity.description}</p>
                    <p>Duration: {activity.duration}</p>
                    <p>Count: {activity.count}</p> 
                  </div>
                );
              })}

              <button type="button" className="button"
              onClick={() => setRoutineId(routine.id)}>Edit</button>
              
            </div>
          ))}
        </>
      ) : (
        <h2>Please log in to see your routines</h2>
      )}
    </div>
  );
};

export default MyRoutines;

/*

<button type="button" className="button"
onClick={() => setRoutineId(routine.id)}>Edit</button>

import { createRoutine, updateRoutine, deleteRoutine, createActivity } from '..api';

const [myRoutines,setMyRoutines] = useState([]);
const [myActivities, setMyActivities] = useState([]);

   
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJpZCI6ODE0LCJ1c2VybmFtZSI6IlNhbSIsImlhdCI6MTY1MDAzNjgwNywiZXhwIjoxNjUwNjQxNjA3fQ.
jxDXj6rY3haFGHhQ5gRNzOLsUFrI8GgLC47Q5k25pB8"
user: {id: 814, username: 'Sam'}
*/
