import React, { useState } from 'react'
import { updateRoutine } from '../api';
import { useHistory, useParams } from 'react-router-dom';

const UpdateRoutine = ({ token, myRoutines }) => {
    const { routineId } = useParams();
    const [activeEdit] = myRoutines.filter(routine => routine.id === Number(routineId));
    const [name, setName] = useState(activeEdit.name);
    const [goal, setGoal] = useState(activeEdit.goal);
    const history = useHistory();

    const handleEdit = async (event) => {
        event.preventDefault();
        await updateRoutine(routineId,token,name,goal);    
        history.push('/myroutines');
    }

    return <>
       <form onSubmit={handleEdit}>
        <h4>Edit Routine</h4>
        
        <input className='input-field' 
        type="text"
        placeholder="name" 
        value={name}
        onChange={e => setName(e.target.value)}
        ></input>

        <input className='input-field' 
        type="text"
        placeholder="goal" 
        value={goal}
        onChange={e => setGoal(e.target.value)}
        ></input>

         <button type="submit" className="button"
         >Edit</button> 

        </form>
    </>
}

export default UpdateRoutine;