import React, { useState } from 'react'
import { updateRoutine } from '../api';

const UpdateRoutine = ({ token }) =>{

    const [routineId, setRoutineId] = useState(null);
    const [name, setName ] = useState('');
    const [goal, setGoal] = useState('')
    const [routine, setRoutine] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        await updateRoutine(token,name,goal,setRoutine,routineId);
    }


    //STILL WORKING ON THIS, INCOMPLETE
    return <>
       <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder="name" 
        value={name}
        ></input>
      </form>
    
    
    
    </>


}

export default UpdateRoutine;