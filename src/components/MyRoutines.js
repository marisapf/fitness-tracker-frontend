import React from 'react';
import CreateRoutine from './CreateRoutine';
import CreateActivity from './CreateActivity';
//, { useState, useEffect }
//import { deleteRoutine, createRoutine, createActivity } from '..api';
//import { fetchMyProfile, fetchMyRoutines } from '../api';


const MyRoutines = ( {token, user, setUser, setRoutines, setActivities} ) => {


return (
    <div id="my-routines-page">
    {user.username && token ? 
    <h2>{user.username + "'s "} Routines</h2>
    : <h2>User's Routines Page</h2> }
    
    <CreateRoutine token={token} setRoutines={setRoutines}/>

    <CreateActivity token={token} setActivities={setActivities}/>
    </div>
)

};

export default MyRoutines;

/*

const MyRoutines = ( {token, user, setUser, routines, setRoutines} ) => {
 
    const [myRoutines, setMyRoutines] = useState([]);

    useEffect(() => {
        const getUser = async() => {
            const apiResp = await fetchMyProfile(token,setUser)
            setUser(apiResp);
        }
        const getRoutines = async() => {
            const apiResp = await fetchAllRoutines()
        }
    })



}




<CreateRoutine token={token} setRoutines={setRoutines} />

    {myRoutines.filter(routine => routine.creatorId === user.id)
    .map((routine, index) => {
        return (
            <div id='my-routines'>
            <form key={index} 
                  style={{ border: "1px solid black", background: "thistle" }}>
                  <h4><u>Routine name:</u>{routine.name}</h4>
                  <h4><u>Routine goal:</u>{routine.goal}</h4>
                  <h4><u>Routine Id: '</u>{routine.id}'</h4>
            </form>  
            </div>
        )
    })}



useEffect(() => {
 const getRoutines = async() => {
     const apiResponse = await fetchMyRoutines(token, username, setMyRoutines);
     setRoutines(apiResponse)
    }
    getRoutines();
  },); 

   //const [routineId, setRoutineId] = useState();
  const [myRoutines, setMyRoutines ] = useState([]);

  useEffect(() => {
    fetchMyProfile(token, setUser);
    fetchMyRoutines(token, user.username, setRoutines)
     },[token]);


const handleDelete = async (routineId) => {

    await deleteRoutine(routineId, token);

    //await fetchMyRoutines(token, setMyRoutines);

    const updatedRoutines = myRoutines.filter(routine => routineId !== routine.id)
    setMyRoutines(updatedRoutines);
}
*/