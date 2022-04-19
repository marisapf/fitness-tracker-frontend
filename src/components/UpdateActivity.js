import React, { useState } from 'react'
import { updateActivity } from '../api';
import { useParams, useHistory } from 'react-router-dom';

const UpdateActivity = ({token, activities}) => {
    const { activityId } = useParams();

  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();
  

    const handleEdit = async (token, event) => {
        event.preventDefault();
        await updateActivity(activityId,token,name,description);
        history.push('/activities');
    }

     return ( 
     <div>
         
       <form id='edit-activity' onSubmit={handleEdit}>
        <h4>Edit Activity</h4>
        
        <input className='input-field' 
        type="text"
        placeholder="name" 
        value={name}
        onChange={e => setName(e.target.value)}
        ></input>

        <input className='input-field' 
        type="text"
        placeholder="description" 
        value={description}
        onChange={e => setDescription(e.target.value)}
        ></input>

         <button type="submit" className="button"
         >Edit</button> 
        </form>
        </div>
    )
}

export default UpdateActivity;

/*Still trying to get this to work. It should work they way it does in MyRoutines
const [activeEdit] = activities.filter(activity => activity.id === Number(activityId));
const [name, setName] = useState(activeEdit.name);
const [description, setDescription] = useState(activeEdit.description);

 return ( 
     <div>
      {activeEdit.activities.map(activity => {
       return <>
       <div key={activity.id}>
         <div id='activity-container'>
         <h2>Activity name: {activity.name}</h2>
         <h3>Description: {activity.description}</h3>
         </div>
        
       <form id='edit-activity' onSubmit={handleEdit}>
        <h4>Edit Activity</h4>
        
        <input className='input-field' type="text" placeholder="name" 
         value={name} onChange={e => setName(e.target.value)}></input>

        <input className='input-field' type="text" placeholder="description" 
        value={description} onChange={e => setDescription(e.target.value)}>
        </input>

         <button type="submit" className="button"
         >Edit</button> 
        </form>
        </div>
    </> })} 
    </div> 
    )


*/