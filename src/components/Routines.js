import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { fetchAllRoutines } from "../api";

/*Routines component */

const Routines = ({ routines, setRoutines }) => {
  const { search } = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(search);
  const searchTerm = searchParams.get("searchTerm") || "";

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetchAllRoutines();
      setRoutines(apiResponse);
    };
    getData();
  }, [setRoutines]);

  const routineMatches = (routine, searchTerm) => {
    const { name, goal } = routine;
    const toCheck = [name, goal];
    for (const field of toCheck) {
      if (field.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
    }
  };
  const sortedRoutines = routines.filter((routine) =>
    routineMatches(routine, searchTerm)
  );

  return (
    <div>
      <h2 className='page-message'>This is the Routines page.</h2>

      <h5 className="search-word">Search: </h5>
      <input className="search-field" type="text" placeholder="search here"
        onChange={(e) => {
          history.push(e.target.value ? `/routines?searchTerm=${e.target.value}`
              : "/routines"
          );
        }}
      />

      <div className='routine-section'>
        {sortedRoutines.map((routine) => {
          return (
            <div key={routine.id} className="routine-container">

              <h2>Routine name: {routine.name}</h2>
              <h2>Created By: {routine.creatorName}</h2>
              <p>Goal: {routine.goal}</p>
              {routine.activities.map((activity) => {
                return (
                  <div className='activity-card'key={activity.id}>
                    <h2>Activity name: {activity.name}</h2>
                    <h3>Description: {activity.description}</h3>
                    <h3>Duration: {activity.duration}</h3>
                    <h3>Count: {activity.count}</h3>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Routines;

/* 
import { addUser } from '../api';
import { Link } from "react-router-dom";
import { GetSingleRoutine } from ".";
import CreateRoutine from "./CreateRoutine";

return ( 
    <h3>This is the Routines page.</h3>
)

 {token ? <CreateRoutine token={token} /> : null}

{ sortedRoutines.map(routine =>
  <GetSingleRoutine key={routine.id} routine={routine}>
    <Link to={`/routines/${routine.id}`}>See details</Link>
</GetSingleRoutine>
  )}
*/
