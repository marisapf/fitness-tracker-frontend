 My user
 /*
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJpZCI6ODE0LCJ1c2VybmFtZSI6IlNhbSIsImlhdCI6MTY1MDAzNjgwNywiZXhwIjoxNjUwNjQxNjA3fQ.
jxDXj6rY3haFGHhQ5gRNzOLsUFrI8GgLC47Q5k25pB8"
user: {id: 814, username: 'Sam'}
   
*/
 
 
 FROM APP
**Might use later:
GetSingleActivity,
SingleActivityView,

const [myActivities, setMyActivities] = useState([]);
<Route exact path="/activities/:activityId">
  <GetSingleActivity />
</Route> 

<Route path="/activities/:activityId">
  <SingleActivityView />
</Route> 


FROM AttachActivityToRoutine

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

FROM index.js export file
//export {default as UpdateRoutineActivity} from './UpdateRoutineActivity';
//export { default as DeleteRoutineActivity } from './DeleteRoutineActivity;

FROM MyActivities

style={{height:'20px', width:'100px'}}
style={{height:'20px', width:'100px'}}

        {/* <form className='activity-form'>
            <h5>Edit a routine activity.</h5>
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
    
            <button className='button' type='submit'>Edit Routine Activity</button>

        </form>    
                
    <button type="submit"className="button"
    onClick={(e) => handleEdit(e, routine_activity.id)}>Edit routine activity</button>

    <button type="submit"className="button"
    onClick={(e) => handleDelete(e, routine_activity.id)}>Delete routine activity</button> 



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

    const handleCreateRoutineActivity = async (event) => {
        event.preventDefault();
    
        await addActivityToRoutine(routineId, count, setCount, duration, setDuration);
            
       //console.log('addActivityToRoutine,routineId',routineId );
    
        setCount('');
        setDuration('');
        history.push('/my_routines')
    }


FROM MyRoutines
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
 </div>

 FROM Register
 token, userMessage
{ !token || !username?  <h2>{userMessage}</h2> : setUserMessage('') }

FROM Routines

import { addUser } from '../api';
import { Link } from "react-router-dom";
import { GetSingleRoutine } from ".";
import CreateRoutine from "./CreateRoutine";

return ( 
    <h3>This is the Routines page.</h3>
)

 {token ? <CreateRoutine token={token} /> : null}

{ sortedRoutines.map(routine =>
  <GetSingleRoutine key={routine.id} routine={routine}>
    <Link to={`/routines/${routine.id}`}>See details</Link>
</GetSingleRoutine>
  )}