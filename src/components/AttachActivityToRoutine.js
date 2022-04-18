import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { addActivityToRoutine } from '../api';

const AttachActivityToRoutine = ({ activities }) => {

   const { routineId } = useParams();
   const[activityId,setActivityId] = useState('');
   const history = useHistory();
   const [count, setCount] = useState('')
   const [ duration, setDuration] = useState('');

const handleCreateRoutineActivity = async (event, routineId) => {
    event.preventDefault();

    await addActivityToRoutine(routineId,activityId, count, duration);
        
    console.log('addActivityToRoutine,routineId',routineId );

    history.push('/my_routines')
}

return (
    <form>
            <label htmlFor='title' id='title'>Activity:</label>
            <select name="activities" onChange={(event) => {setActivityId(event.target.value)}}>
              <option>Please Select An Activity</option>
              {activities && activities.map(activity => {
                return (
                <option value={activity.id} key={activity.id}>{activity.name}</option>
                )
              })}
            </select>
            <br />
            <label htmlFor='title' id='title'>Counts:</label>
            <input type='number' id='title-input' name='count' placeholder='' value={count} onChange={(event) => setCount(event.target.value)}/>
            <br />
            <label htmlFor='title' id='title'>Duration:</label>
            <input type='number' id='title-input' name='duration' placeholder='' value={duration} onChange={(event) => setDuration(event.target.value)}/>
            <button type='submit' onClick={(event) => handleCreateRoutineActivity(event, routineId)}>Add Activity</button>
          </form>
   
)

}

export default AttachActivityToRoutine;

/*

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
*/