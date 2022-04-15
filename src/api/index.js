import { APIURL } from "../components";
//const APIURL = 'https://fitnesstrac-kr.herokuapp.com/api';

// THIS IS WHERE YOUR CLIENT SIDE API CODE LIVES

export const callApi = async ({ url, method, token, body }) => {
  // CALL API
};

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
    
    console.log("result,", result);
    console.log("result.token,", result.token);
    
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
    
    if (result.error) throw result.error;

    if (result) {
      await fetch(`${APIURL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${result.token}`,
        },
      });

      console.log("result.token,", result.token);
      console.log("username,", result.user.username);
      
      setToken(result.token);
      setUser({ username: result.user.username });
      setUserMessage(result.message);

      if (result.token) {
        history.push("/");
      }
    }
  } catch (err) {
    console.error("Trouble logging in.", err);
    setUserMessage("Invalid username or password. Please try again.");
  }
};

export const fetchMyProfile = async(token,setUser) => {

  try {
    const response = await fetch(`${APIURL}/users/me`, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
  })
  const result = await response.json(); 
  console.log('fetchMyProfile, result,',result);
  setUser(result);

  } catch (err) {
    console.error('Trouble fetching user.', err)
  }
}

//fetchAllRoutines, returns list of al public routines, an array of objects
export const fetchAllRoutines = async () => {

  try {
      const response = await fetch(`${APIURL}/routines`);
      const result = await response.json();
      
      console.log('routines, result', result);
      //if (result.error) throw result.error;
      return result;

  } catch (err) {
      console.error('Trouble fetching routines.', err)
  }
};

export const fetchRoutinesByUsername = async(token, username, setRoutines) => {
    try {
        const response = await fetch(`${APIURL}/users/:${username}/routines`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
    })
    const result = response.json();
    
    console.log('fetchRoutinesByUsername, result, ', result);
    
    setRoutines(result);
    } catch (err) {
      console.error('Trouble fetching users routines.', err)
  }
};

export const createNewRoutine = async (token, name, goal, isPublic, setName, setGoal, setIsPublic) => {

    try {
        const response = await fetch(`${APIURL}/routines`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                    name,
                    goal,
                    isPublic
            })
        });
        const result = await response.json();
        
        console.log('createNewRoutine,', result )
        //if (result.error) throw result.error;
        
        setName(name);
        setGoal(goal);
        setIsPublic(isPublic);

    } catch (err) {
        console.error('Trouble creating routine.', err)
    }
};


export const fetchAllActivities = async () => {

  try {
      const response = await fetch(`${APIURL}/activities`);
      const result = await response.json();
      
      console.log('activities, result', result);

      return result;

  } catch (err) {
      console.error('Trouble fetching activities.', err)
  }
};

export const createNewActivity = async (token, name, description, setName, setDescription) => {

  try {
      const response = await fetch(`${APIURL}/activities`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
                  name,
                  description
          })
      });
      const result = await response.json();
      
      console.log('createNewRoutine,', result )
      //if (result.error) throw result.error;
      setName(name);
      setDescription(description);
      
  } catch (err) {
      console.error('Trouble creating activity.', err)
  }
};



/*
*/

/* line 28, register if (result.error) throw result.error;

      if (result) {
          await fetch(`${APIURL}/users/me`, {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${result.token}`
              }
          });

          console.log('result.token,',result.token);
          //console.log('user.username,', result.user.username);
          setToken(result.token);
          setUser({ username: result.username});
          //setUser({ username: result.user.username });
          setUserMessage(result.message);

          if (result.token) {
              history.push('/');
          }


  from login line 58

  if (result) {
          await fetch(`${APIURL}/users/me`, {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${result.token}`
              }
          });

          console.log('result.token,',result.token)
          console.log('username,', username);
          setToken(result.token);
          setUser({ username: result.user.username })
          setUserMessage(result.message);

          if (result.token) {
              history.push('/');
          }
      }
      }*/
