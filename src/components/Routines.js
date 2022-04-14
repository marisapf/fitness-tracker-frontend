import React, { useState, useEffect } from 'react';
//import {   useLocation, useHistory } from 'react-router-dom';
//import { fetchAllRoutines } from '../api';

//import { addUser } from '../api';
//

/*Routines component */

const Routines = () => {

  return ( 
    <h3>This is the Routines page.</h3>

    )
};

export default Routines;

/* 

const Routines = ({ routines, setRoutines }) => {

  const { search } = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(search);
  const searchTerm = searchParams.get('searchTerm') || '';


  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetchAllRoutines();
      //console.log('apiResponse: ', apiResponse);//causing a console.log loop
      setRoutines(apiResponse);
    }
    getData();
  }, [setRoutines]);

const routineMatches = (routine, searchTerm) => {
    const { name, goal } = routine;   
    const toCheck = [name, goal]
    for (const field of toCheck) {
      if (field.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
    }
  }
  const sortedRoutines = routines.filter(routine => routineMatches(routine, searchTerm))

   return ( 
     <div>
       <h3>This is the Routines page.</h3>

       <h5 id='search-word'>Search: </h5>
         <input
           id='search-field'
           type='text'
           placeholder='search here'
           onChange={(e) => { history.push(e.target.value ? `/routines?searchTerm=${e.target.value}` : '/routines') }}
          />
        
        <div>
        { sortedRoutines.map(routine =>
          <GetSingleRoutine key={routine.id} routine={routine}>
            <Link to={`/routines/${routine.id}`}>See details</Link>
          </GetSingleRoutine>
      )} </div>
      
      </div>  
    )
  };
*/