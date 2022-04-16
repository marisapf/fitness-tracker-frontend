import React , { useEffect }  from 'react';
//import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchAllActivities } from '../api';
//import { GetSingleActivity } from '.'
//import CreateActivity from './CreateActivity';

/*Activities component */

const Activities = ( {token, activities, setActivities} ) => {

  const { search } = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(search);
  const searchTerm = searchParams.get('searchTerm') || '';
  
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetchAllActivities();
      //console.log('apiResponse: ', apiResponse);//causing a console.log loop
      setActivities(apiResponse);
    }
    getData();
  }, [setActivities]);

  const activityMatches = (activity, searchTerm) => {
    const { name, description } = activity;   
    const toCheck = [name, description]
    for (const field of toCheck) {
      if (field.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
    }
  }
  const sortedActivities = activities.filter(activity => activityMatches(activity, searchTerm));


  return ( 
  <div>
  <h3>This is the Activities page.</h3>

  <h5 id='search-word'>Search: </h5>
           <input
             id='search-field'
             type='text'
             placeholder='search here'
             onChange={(e) => { history.push(e.target.value ? `/activities?searchTerm=${e.target.value}` : '/activities') }}
            />    

           <div>
           {sortedActivities.map(activity => {
           return (
            <div
              key={activity.id}
              id='single-routine'
              style={{ border: "1px solid black", background: "bisque" }}>
              <h4><u>Name of activity: </u>{activity.name}</h4>
              <h4><u>Description: </u>{activity.description}</h4>
              <h4><u>Activity Id: </u> {activity.id}</h4>
             </div>
            ) }) }
           </div>
         
         </div> 
    )
}

export default Activities;

/*
 { token ? <CreateActivity token={token}/> : null }
         {sortedActivities.map(activity =>
           <GetSingleActivity key={activity.id} activity={activity}>
             <Link to={`/activities/${activity.id}`}>See details</Link>
           </GetSingleActivity>
       )}
*/