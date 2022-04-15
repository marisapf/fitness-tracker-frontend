import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import { fetchAllRoutines } from "../api";
import { GetSingleRoutine } from ".";
import CreateRoutine from "./CreateRoutine";

//import { addUser } from '../api';

/*Routines component */

const Routines = ({ token, routines, setRoutines }) => {
  const { search } = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(search);
  const searchTerm = searchParams.get("searchTerm") || "";

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetchAllRoutines();
      //console.log('apiResponse: ', apiResponse);//causing a console.log loop
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
      <h3>This is the Routines page.</h3>

     
      <h5 id="search-word">Search: </h5>
      <input
        id="search-field"
        type="text"
        placeholder="search here"
        onChange={(e) => {
          history.push(
            e.target.value
              ? `/routines?searchTerm=${e.target.value}`
              : "/routines"
          );
        }}
      />

      <div>
        {sortedRoutines.map((routine) => {
          return (
            <div key={routine.id} id="routine-card" style={{ border: "1px solid black", background: "bisque" }}>

              <h2>{routine.name}</h2>
              <h2>Created By: {routine.creatorName}</h2>
              <p>{routine.goal}</p>
              {routine.activities.map((activity) => {
                return (
                  <div key={activity.id} id="routine-card">
                    <h2>{activity.name}</h2>
                    <p>Description: {activity.description}</p>
                    <p>Duration: {activity.duration}</p>
                    <p>Count: {activity.count}</p>
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
