import React, { useState } from 'react'
import { createNewActivity, fetchAllActivities } from '../api';

/*This component lets user create a new activity */
const CreateActivity = ({ token, setActivities }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        await createNewActivity(token, name, description, setName, setDescription);
        
        console.log('create activity, name, description: ', name, description);

        await fetchAllActivities(setActivities);

        setName('');
        setDescription('');
        
    }

    return (

        <form className='activity-container' onSubmit={handleSubmit}>
            <h5>Create an activity</h5>
            <input className='input-field'
                type='text'
                placeholder='activity name'
                value={name}
                onChange={e => setName(e.target.value)}>
            </input>

            <input className='input-field'
                type='text'
                placeholder='description'
                value={description}
                onChange={e => setDescription(e.target.value)} >
            </input>

            <button id='form-buttons' type='submit'>Create Activity</button>
        </form>
    )
}

export default CreateActivity;
