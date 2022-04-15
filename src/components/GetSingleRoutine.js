import React from 'react';

/*Renders a single routine  */

//this component is used in SingleRoutineView

const GetSingleRoutine = ({ routine }) => {

    return (
          <div
            key={routine.id}
            id='single-routine'
            style={{ border: "1px solid black", background: "bisque" }}>
            <h4><u>Name of routine: </u>{routine.name}</h4>
            <h4><u>Goal: </u>{routine.goal}</h4>
            <h4><u>Routine Id:</u>  {routine.id}</h4>
           </div>
    )
}

export default GetSingleRoutine;

/*
 <h4><u>Public? </u>{routine.isPublic}</h4>
<h4><u>Routine Id:</u>  {routine.id}</h4>
            <h4><u>Creator Id:</u>  {routine.creatorId}</h4>
             {children}
*/