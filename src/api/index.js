import { APIURL } from "../components";
//const APIURL = 'https://fitnesstrac-kr.herokuapp.com/api';

// THIS IS WHERE YOUR CLIENT SIDE API CODE LIVES

// CALL API
/*
export const callApi = async ({ url, method, token, body }) => {

  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body
      }),
    });
    if(token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }
    const resp = await fetch(`${APIURL}/${url}`, options);
    const result = resp.json();
    return result;
  } catch (error){
    console.error(error)
  }
};
 */

/*addUser lets a user register */
export const addNewUser = async (
  username,
  password,
  setToken,
  setUser,
  setUserMessage,
  history
) => {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    setToken(result.token);
    setUser({ username: result.username });
    setUserMessage(result.message);
    history.push("/");
  } catch (err) {
    console.error("Trouble adding user.", err);
    setUserMessage("Invalid username or password. Please try again.");
  }
};

/*login lets a user log in */
export const loginUser = async (
  username,
  password,
  setToken,
  setUser,
  setUserMessage,
  history
) => {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();

    console.log("result,", result);

    await fetch(`${APIURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${result.token}`,
      },
    });

    setToken(result.token);
    setUser({ username: result.user.username });
    setUserMessage(result.message);

    localStorage.setItem("token", JSON.stringify(result.token));
    localStorage.setItem("user", JSON.stringify(result.user));
    history.push("/");
    return result;
  } catch (err) {
    console.error("Trouble logging in.", err);
    setUserMessage("Invalid username or password. Please try again.");
  }
};

/*fetch user's profile*/
export const fetchMyProfile = async (token, setUser) => {
  try {
    const response = await fetch(`${APIURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    setUser(result);
  } catch (err) {
    console.error("Trouble fetching user.", err);
  }
};

//fetchAllRoutines, returns list of al public routines, an array of objects
export const fetchAllRoutines = async () => {
  try {
    const response = await fetch(`${APIURL}/routines`);
    const result = await response.json();
   return result;
  } catch (err) {
    console.error("Trouble fetching routines.", err);
  }
};

/*fetchRoutinesByUsername*/
export const fetchRoutinesByUsername = async (token, username) => {
  try {
    const response = await fetch(`${APIURL}/users/${username}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error("Trouble fetching users routines.", err);
  }
};

/*createNewRoutine*/
export const createNewRoutine = async (
  token,
  name,
  goal,
  isPublic,
  setName,
  setGoal,
  setIsPublic,
  history
) => {
  try {
    const response = await fetch(`${APIURL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });
    const result = await response.json();

    console.log("createNewRoutine,", result);

    setName(result.name);
    setGoal(result.goal);
    setIsPublic(result.isPublic);
    //history.push("/routines"); did not like this
  } catch (err) {
    console.error("Trouble creating routine.", err);
  }
};

export const updateRoutine = async (routineId, token, name, goal) => {
  try {
    const response = await fetch(`${APIURL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic: true,
      }),
    });
    const result = await response.json();
    
    console.log("updateRoutine, result", result);

    return result;
  } catch (err) {
    console.error("Trouble updating routine.", err);
  }
};

export const deleteRoutine = async (token, routineId) => {
  try {
    const response = await fetch(`${APIURL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log("deleteRoutine, result", result);

    return result;
  } catch (err) {
    console.error("Trouble deleting routine.", err);
  }
};

/*fetchAllActivities*/
export const fetchAllActivities = async () => {
  try {
    const response = await fetch(`${APIURL}/activities`);
    const result = await response.json();

    console.log("activities, result", result);

    return result;
  } catch (err) {
    console.error("Trouble fetching activities.", err);
  }
};

/*createNewActivity*/
export const createNewActivity = async (
  token,
  name,
  description,
  setName,
  setDescription
) => {
  try {
    const response = await fetch(`${APIURL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const result = await response.json();

    console.log("createNewActivity,", result);

    setName(result.name);
    setDescription(result.description);

  } catch (err) {
    console.error("Trouble creating activity.", err);
  }
};

/*updateActivity*/
export const updateActivity = async (activityId, token, name, description) => {
  //setName, setDescription,activities, setActivities
  try {
    const response = await fetch(`${APIURL}/activities/${activityId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const result = await response.json();

    console.log("updateActivity, result", result);
    return result;
  } catch (err) {
    console.error("Trouble updating activity.", err);
  }
};

/*fetch list of public routines that feature activity*/

export const getRoutinesByActivityId = async (activityId) => {
  try {
    const response = await fetch(`${APIURL}/${activityId}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    console.log("routines by activity, result", result);

    return result;
  } catch (err) {
    console.error("Trouble getting routine.", err);
  }
};

/*add activity to routine*/
export const addActivityToRoutine = async (
  routineId,
  activityId,
  count,
  duration
) => {
  try {
    const response = await fetch(`${APIURL}/routines/${routineId}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activityId,
        count,
        duration,
      }),
    });
    const result = await response.json();

    console.log("attachActivityToRoutine, result", result);
    return result;
  } catch (err) {
    console.error("Trouble adding activity.", err);
  }
};

export const updateRoutineActivity = async (
  routineActivityId,
  token,
  count,
  duration
) => {
  try {
    const response = await fetch(
      `${APIURL}/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          count,
          duration,
        }),
      }
    );
    const result = await response.json();

    console.log("updateRoutineActivity, result", result);
    return result;
  } catch (err) {
    console.error("Trouble updating routine activity.", err);
  }
};

/*deleteRoutineActivity*/
export const deleteRoutineActivity = async (token, routineActivityId) => {
  try {
    const response = await fetch(
      `${APIURL}/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log("deleteRoutineActivity, result", result);
    //history.push('/my_routines')
    return result;
  } catch (err) {
    console.error("Trouble deleting routine activity.", err);
  }
};

/*
console.log("result,", result);
console.log("result.token,", result.token);

console.log("result.token,", result.token);
console.log("result.user.username,", result.user.username);
console.log('result.message:', result.message)

console.log('fetchMyProfile, result,',result); 
//setsUser, {'id': 814,'username': Sam}

console.log("routines, result", result);

console.log("fetchRoutinesByUsername, ", username);
console.log("fetchRoutinesByUsername, result, ", result);
  
 /* if(result & result.name) {
        const newActivities = activities.map(activity => {
          if(activity.id === activityId){
            return result;
          } else {
            return activity;
          }
        });
        setActivities(newActivities);
      //setName('');
      //setDescription('');
        
      }
  */
