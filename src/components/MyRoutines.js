import React, { useEffect} from "react";
import { useLocation, useHistory } from "react-router-dom";
import CreateRoutine from "./CreateRoutine";
import { fetchRoutinesByUsername, deleteRoutine } from "../api";

/*Logged in user's routines */

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

  const manageActivity = (event, routineId) => {
    event.preventDefault();
    history.push(`/my_routines/update/${routineId}`)
  }

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
    <div>
      {token ? (
        <>
          <h2 className='page-message'>{user.username + "'s "} Routines</h2>
         
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

                  {routine.activities.map((activity) => {
                    return (
                      <div className="activity-card" key={activity.id}>
                        <h2>Activity name: {activity.name}</h2>
                        <h3>Description: {activity.description}</h3>
                        <h3>Duration: {activity.duration}</h3>
                        <h3>Count: {activity.count}</h3>
                      </div>
                    );
                  })}
        
                  <button type="submit"className="button"
                  onClick={(e) => handleEdit(e, routine.id)}>Edit Routine</button>

                  <button type="submit"className="button"
                   onClick={(e) => handleDelete(e, routine.id)}>Delete Routine</button>
               
                  <button type="submit"className="button"
                  onClick={(event) => manageActivity(event, routine.id)}>Manage Activities</button>

                </div>
              );
            })} 
            </div>
        </>
      ) :  <h2 className='page-message'>Please log in to see your routines</h2> }
    </div>
  );

};

export default MyRoutines;


