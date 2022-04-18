import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { addActivityToRoutine, deleteRoutineActivity, updateRoutineActivity } from "../api";


//Add an activity to a routine, this is a routine_activity
//update a routine activity, 
//delete a routine activity

const MyActivities = ({token}) => {
// ,myRoutines, setMyRoutines, myActivities, setMyActivities, , setRoutine_activity
    const { routineId } = useParams();
    const [routine_activity] = useState({});
    const history = useHistory();
    const [count, setCount] = useState('')
    const [ duration, setDuration] = useState('');

    const handleCreateRoutineActivity = async (event) => {
        event.preventDefault();
    
        await addActivityToRoutine(routineId, count, setCount, duration, setDuration);
            
       //console.log('addActivityToRoutine,routineId',routineId );
    
        setCount('');
        setDuration('');
        history.push('/my_routines')
    }
    
    const handleEdit = async (event, routineActivityId) => {
        await updateRoutineActivity(routineActivityId, token, count, duration)
        event.preventDefault();
        history.push('/my_routines')
      };
    
      const handleDelete = async (event, routineActivityId) => {
        event.preventDefault();
        await deleteRoutineActivity(token, routineActivityId);
        history.push('/my_routines')
      };


      return (
        <div>
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



        
                
    <button type="submit"className="button"
    onClick={(e) => handleEdit(e, routine_activity.id)}>Edit routine activity</button>

    <button type="submit"className="button"
    onClick={(e) => handleDelete(e, routine_activity.id)}>Delete routine activity</button>

    </div>
    )
}

export default MyActivities;

/*
 <div>
      
 <label htmlFor='activity-list'>activity<span className='activity-count'
  >({routine.activities.length})</span></label> 

  <select name="activity" id='select-activity' value={activity}
   onChange={e => {setActivity(e.target.value)}}>
  <option value='any'>Any</option> 
   {routine.activities.map((activity) => { 
    return (
    <option key={activity.id}>{activity.name}</option> )
    }
     )
      };
  </select>

   {routine.activities.map((activity) => {
    return (
      <div id="activity-card" key={activity.id}>
       <h2>{activity.name}</h2>
       <p>Description: {activity.description}</p>
       <p>Duration: {activity.duration}</p>
       <p>Count: {activity.count}</p>
      </div>
         );
    })}

    

</div>









*/

