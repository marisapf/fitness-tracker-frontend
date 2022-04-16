import React from 'react';

/*Renders a single activity */

//this component is used in SingleActivityView

const GetSingleActivity = ({ activity }) => {

    return (
          <div
            key={activity.id}
            id='single-routine'
            style={{ border: "1px solid black", background: "bisque" }}>
            <h4><u>Name of activity: </u>{activity.name}</h4>
            <h4><u>Description: </u>{activity.description}</h4>
            <h4><u>Activity Id: </u> {activity.id}</h4>
           </div>
    )
}

export default GetSingleActivity;