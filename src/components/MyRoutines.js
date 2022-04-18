import React, { useEffect} from "react";
import { useLocation, useHistory } from "react-router-dom";
import CreateRoutine from "./CreateRoutine";
import AttachActivityToRoutine from "./AttachActivityToRoutine";
import { fetchRoutinesByUsername, deleteRoutine } from "../api";

/*Logged in users routines */

const MyRoutines = ({ token, user, myRoutines, 
    setMyRoutines }) => {

  const { search } = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(search);
  const searchTerm = searchParams.get("searchTerm") || "";
  
  const getData = async () => {
    const apiResponse = await fetchRoutinesByUsername(token, user.username);
    setMyRoutines(apiResponse);
  };
  useEffect(() => {
      if(token) {
       getData();
      }
  }, [token]);

  const handleEdit = async (event, routineId) => {
    event.preventDefault();
    history.push(`/update/${routineId}`);
  };

  const handleDelete = async (event, routineId) => {
    event.preventDefault();
    await deleteRoutine(token, routineId);
    getData();
  };

  console.log('myRoutines,',myRoutines)
  console.log('token, MyRoutines, ',token);

  const routineMatches = (routine, searchTerm) => {
    const { name, goal } = routine;
    const toCheck = [name, goal];
    for (const field of toCheck) {
      if (field.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
    }
  };
  const mySortedRoutines = myRoutines.filter((routine) =>
    routineMatches(routine, searchTerm)
  );

  return (
    <div id="my-routines-page">
      {token ? (
        <>
          <h2>{user.username + "'s "} Routines</h2>
         
          <h5 className="search-word">Search: </h5>
          <input className="search-field" type="text" placeholder="search here"
           onChange={(e) => {
             history.push(e.target.value ? `/my_routines?searchTerm=${e.target.value}`
             : "/routines"
             );
            }}
           />

          <CreateRoutine token={token} user={user} setMyRoutines={setMyRoutines} />

          <div className='routine-section'>
          {mySortedRoutines.map((routine) => {
              return (
                <div key={routine.id} className="routine-container">
                  <h4><u>Name of routine: </u> {routine.name}</h4>
                  <h4><u>Goal: </u> {routine.goal}</h4>
                  <h4><u>Routine Id:</u> {routine.id}</h4>

                 {/*} <div>
                  <label htmlFor='activity-list'>activity<span className='activity-count'
                  >({routine.activities.length})</span></label> 
                  <select name="activity" id='select-activity' value={activity}
                   onChange={e => {setActivity(e.target.value)}}>
                  <option value='any'>Any</option> 
                  {routine.activities.map((activity) => { 
                      return (
                          <option key={activity.id}>{activity.name}</option>)
                      }
                      )
                   };
                  </select>
                  </div>*/}

                  {routine.activities.map((activity) => {
                    return (
                      <div id="activity-card" key={activity.id}>
                        <h2>{activity.name}</h2>
                        <p>Description: {activity.description}</p>
                        <p>Duration: {activity.duration}</p>
                        <p>Count: {activity.count}</p>
                      </div>
                    );
                  })}

                <AttachActivityToRoutine routineId={routine.id} token={token} />
                
                  <button type="submit"className="button"
                  onClick={(e) => handleEdit(e, routine.id)}>Edit Routine</button>

                  <button type="submit"className="button"
                   onClick={(e) => handleDelete(e, routine.id)}>Delete Routine</button>
                </div>
              );
            })} 
            </div>
        </>
      ) :  <h2>Please log in to see your routines</h2> }
    </div>
  );

};

export default MyRoutines;

/*

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJpZCI6ODE0LCJ1c2VybmFtZSI6IlNhbSIsImlhdCI6MTY1MDAzNjgwNywiZXhwIjoxNjUwNjQxNjA3fQ.
jxDXj6rY3haFGHhQ5gRNzOLsUFrI8GgLC47Q5k25pB8"
user: {id: 814, username: 'Sam'}

style={{ border: "1px solid black", background: "bisque" }}

<CreateActivity routineId={routine.id} token={token} setActivities={setActivities} />

setLoggedIn(true);
const [loggedIn, setLoggedIn] = useState(false)
const { routineId } = useParams();
const [count, setCount] = useState('');
const [duration, setDuration] = useState('');

const handleAddActivity = async (event) => {
    event.preventDefault();
    await addActivityToRoutine(routineId, count, setCount, duration, setDuration);
    //getData();
  };

<button type="button" className="button"
onClick={() => setRoutineId(routine.id)}>Edit</button>

import { createRoutine, updateRoutine, deleteRoutine, createActivity } from '..api';
   

 <form className='activity-container' onSubmit={handleSubmit}>
   <h5>add an activity</h5>
     <input className='input-field' type='number'placeholder='duration'value={duration}
      onChange={e => setDuration(e.target.value)}>
     </input>

   <input className='input-field' type='number' placeholder='count'value={count}
    onChange={e => setCount(e.target.value)} >
   </input>

    <button id='form-buttons' type='submit'>add activity</button>
  </form>


*/
