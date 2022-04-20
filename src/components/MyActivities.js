import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { deleteRoutineActivity, updateRoutineActivity } from "../api";
import AttachActivityToRoutine from "./AttachActivityToRoutine";

/*Add an activity to a routine, this is a routine_activity
//update a routine activity, 
//delete a routine activity */

const MyActivities = ({ token, activities, myRoutines }) => {
// ,myRoutines, setMyRoutines, myActivities, setMyActivities, , setRoutine_activity
    const { routineId } = useParams();
    const [activeEdit] = myRoutines.filter(routine => routine.id === Number(routineId));
    //const [activityId,setActivityId] = useState({});
    const history = useHistory();
    const [count, setCount] = useState('')
    const [ duration, setDuration] = useState('');
    
    const handleEdit = async (event, routineActivityId) => {
      event.preventDefault();
        await updateRoutineActivity(routineActivityId, token, count, duration);
       
        history.push('/my_routines')
      };
    
      const handleDelete = async (event, routineActivityId) => {
        event.preventDefault();
        await deleteRoutineActivity(token, routineActivityId);
        history.push('/my_routines')
      };

      return (
        <div>
          <AttachActivityToRoutine token={token} activities={activities} myRoutines={myRoutines}/>

          {activeEdit.activities.map(activity => {
            return <>
              
              <div  key={activity.id} id='routine-activity-container'>
              <h2>Activity: {activity.name}</h2>
              <h3>Description: {activity.description}</h3>
              <h3>Count: {activity.count}</h3>
              <h3>Duration: {activity.duration}</h3>
              </div>
              <form id='edit-routine-activity'>
                <h5 id='routine-activity-edit'>Edit routine activity.</h5>
                  
                <label htmlFor='title' id='title'>Count</label>
                <input className='number-input' type='number' placeholder='count'
                 value={count} onChange={e => setCount(e.target.value)}></input>
                      
                <label htmlFor='title' id='title'>Duration</label>
                <input className='number-input' type='number' placeholder='duration'
                 value={duration} onChange={e => setDuration(e.target.value)}></input>
                     
        
              <button type="submit"className="longer-button"
              onClick={(e) => handleEdit(e, activity.routineActivityId)}>Edit routine activity</button>
              <button type="submit"className="longer-button"
              onClick={(e) => handleDelete(e, activity.routineActivityId)}>Delete routine activity</button>
            </form>
           
          
            </>
          })}
        </div>
      )  
}

export default MyActivities;

/*

*/

