import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { addActivityToRoutine } from '../api';

const AttachActivityToRoutine = ({ activities, myRoutines }) => {

   const { routineId } = useParams();
   const [activeEdit] = myRoutines.filter(routine => routine.id === Number(routineId));
   const [activityId, setActivityId] = useState('');
   const [count, setCount] = useState('')
   const [duration, setDuration] = useState('');
   const history = useHistory();

const handleCreateRoutineActivity = async (event, routineId) => {
    event.preventDefault();

    await addActivityToRoutine(routineId,activityId, count, duration);
        
    console.log('addActivityToRoutine,routineId',routineId );

    history.push('/my_routines');

}

const openActivities = activities.filter(({name: val1}) => !activeEdit.activities.some(({name: val2}) => val2 === val1));

return (
    <div id='routine-activity'>
     <form>
        <label htmlFor='title' className='activity-title'>Activity:</label>
          <select id='activity-select' name="activities" onChange={(event) => {setActivityId(event.target.value)}}>
          <option >Please Select An Activity</option>
          {openActivities && openActivities.map(activity => {
           return (
          <option value={activity.id} key={activity.id}>{activity.name}</option>
            )
           })}
          </select>
          <br />
          <label htmlFor='title' className='activity-title'>Counts:</label>
          <input className='number-input'type='number'name='count' placeholder='' value={count} onChange={(event) => setCount(event.target.value)}/>
          <br />
          <label htmlFor='title' className='activity-title'>Duration:</label>
          <input className='number-input' type='number' name='duration' placeholder='' value={duration} onChange={(event) => setDuration(event.target.value)}/>
          <br></br>
          <button className='button'type='submit' onClick={(event) => handleCreateRoutineActivity(event, routineId)}>Add Activity</button>
      </form>
     </div>
)

}

export default AttachActivityToRoutine;

/*

*/