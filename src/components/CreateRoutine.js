import React, { useState } from 'react'
import { createNewRoutine, fetchAllRoutines } from '../api';

/*This component lets user create a new activity */
const CreateRoutine = ({ token, setRoutines }) => {

    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        await createNewRoutine(token, name, goal, isPublic, setName, setGoal, setIsPublic);
        
        console.log('create routine, name, goal, isPublic: ', name, goal, isPublic);

        await fetchAllRoutines(setRoutines);

        setName('');
        setGoal('');
        setIsPublic(true);
        
    }

    return (

        <form className='create-routine-container' onSubmit={handleSubmit}>
            <h5>Create a routine.</h5>
            <input className='input-field'
                type='text'
                placeholder='routine name'
                value={name}
                onChange={e => setName(e.target.value)}>
            </input>

            <input className='input-field'
                type='text'
                placeholder='goal'
                value={goal}
                onChange={e => setGoal(e.target.value)} >
            </input>

            <input className='input-field'
                type='text'
                placeholder='is public'
                value={isPublic}
                onChange={e => setIsPublic(e.target.value)} >
            </input>

            <button className='button' type='submit'>Create Routine</button>
        </form>
    )
}

export default CreateRoutine;
