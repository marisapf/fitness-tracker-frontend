import React, { useState } from 'react';
//import { useParams } from 'react-router-dom'
import { addActivityToRoutine } from '../api';

const AttachActivityToRoutine = (routineId) => {

   //const { routineId } = useParams();
   const [count, setCount] = useState('')
   const [ duration, setDuration] = useState('');

const handleCreateRoutineActivity = async (event) => {
    event.preventDefault();

    await addActivityToRoutine(routineId, count, setCount, duration, setDuration);
        
    console.log('addActivityToRoutine,routineId',routineId );

    setCount('');
    setDuration('');
  
}

return (

    <form className='activity-form' onSubmit={handleCreateRoutineActivity}>
        <h5>Create a routine activity.</h5>
        <input className='input-field' style={{height:'20px', width:'100px'}}
            type='number'
            placeholder='count'
            value={count}
            onChange={e => setCount(e.target.value)}>
        </input>

        <input className='input-field' style={{height:'20px', width:'100px'}}
            type='number'
            placeholder='duration'
            value={duration}
            onChange={e => setDuration(e.target.value)} >
        </input>

        <button className='button' type='submit'>Create Routine Activity</button>
    </form>
)

}

export default AttachActivityToRoutine;
