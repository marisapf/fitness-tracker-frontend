import React, { useState } from 'react'
import { updateActivity } from '../api';
import { useParams, useHistory } from 'react-router-dom';

const UpdateActivity = ({token, activities}) => {
    const { activityId } = useParams();

    //const [activeEdit] = activities.filter(activity => activity.id === Number(activityId));
    //const [name, setName] = useState(activeEdit.name);
   //  const [description, setDescription] = useState(activeEdit.description);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
  

    const handleEdit = async (token, event) => {
        event.preventDefault();
        await updateActivity(activityId,token,name,description);
        history.push('/activities');
    }

    return <>
       <form onSubmit={handleEdit}>
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
    </>
}

export default UpdateActivity;