import React, { useState } from 'react'
import { updateActivity } from '../api';

const UpdateActivity = ({ token }) => {

    const [activityId, setActivityId] = useState(null);
    const [name, setName ] = useState('');
    const [description, setDescription] = useState('')
    const [activity, setActivities] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        await updateActivity(activityId,token,name,setName,
            description,setDescription,setActivityId,activity,setActivities);
    }

    return <>
       <form onSubmit={handleSubmit}>
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

        </form>
    </>
}

export default UpdateActivity;