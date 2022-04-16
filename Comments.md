FROM src/api/index

/* line 28, register 

if (result.error) throw result.error;

      if (result) {
          await fetch(`${APIURL}/users/me`, {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${result.token}`
              }
          });

          console.log('result.token,',result.token);
          //console.log('user.username,', result.user.username);
          setToken(result.token);
          setUser({ username: result.username});
          //setUser({ username: result.user.username });
          setUserMessage(result.message);

          if (result.token) {
              history.push('/');
          }


  from login line 58

  if (result) {
          await fetch(`${APIURL}/users/me`, {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${result.token}`
              }
          });

          console.log('result.token,',result.token)
          console.log('username,', username);
          setToken(result.token);
          setUser({ username: result.user.username })
          setUserMessage(result.message);

          if (result.token) {
              history.push('/');
          }
      }
      }

  //if (result.error) throw result.error;

   /* if (result) {
      await fetch(`${APIURL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${result.token}`,
        },
      });*/  

/*if (result.token) {
        history.push("/");
      }*/  
      

fetchAllRoutines
 //if (result.error) throw result.error;

createNewRoutine
 //if (result.error) throw result.error;

 createNewActivity
  //if (result.error) throw result.error;

 */

 /*import React, { useState } from 'react'
import { deleteRoutine } from '../api';



const DeleteRoutine = ( {token} ) => {

    const [routineId, setRoutineId] = useState(null); 
    const [routines, setRoutines] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        await deleteRoutine(routineId,token,setRoutineId,routines,setRoutines);
    }

    return (
        <>
        
       <button onSubmit={handleSubmit}>
        <h4>Delete Routine</h4>
        </button>
        </>
    )
};

export default DeleteRoutine; */

FROM MyRoutines
/*useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetchRoutinesByUsername(token, user.username);
      setMyRoutines(apiResponse);
      console.log("my routines, ", apiResponse); //an array of routines by user
      console.log("my routines, routines", myRoutines);
    };
    getData();
  }, []);*/
