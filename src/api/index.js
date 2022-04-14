import { APIURL } from '../components';
//const APIURL = 'https://fitnesstrac-kr.herokuapp.com/api';

// THIS IS WHERE YOUR CLIENT SIDE API CODE LIVES

export const callApi = async ({ url, method, token, body }) => {
  // CALL API
};

/*addUser lets a user register */
export const addNewUser = async (username, password, setToken, setUser, setUserMessage, history) => {

  try {
      const response = await fetch(`${APIURL}/users/register`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                  username,
                  password
          })
      });
      const result = await response.json();
      console.log('result,', result)

      console.log('result.token,',result.token);
          //console.log('user.username,', result.user.username);
          setToken(result.token);
          setUser({ username: result.username});
          //setUser({ username: result.user.username });
          setUserMessage(result.message);
          history.push('/');
  }
  catch (err) {
      console.error('Trouble adding user.', err)
      setUserMessage('Invalid username or password. Please try again.')
  }
}


/*login lets a user log in */
export const loginUser = async (username, password, setToken, setUser, setUserMessage, history) => {

  try {
      const response = await fetch(`${APIURL}/users/login`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
               
                  username,
                  password
          })
      });
      const result = await response.json();
      console.log('result,', result)
      if (result.error) throw result.error;

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
  }
  catch (err) {
      console.error('Trouble logging in.', err)
      setUserMessage('Invalid username or password. Please try again.')
  }
}

/*fetchAllRoutines, returns list of al public routines, an array of objects
export const fetchAllRoutines = async () => {

  try {
      const response = await fetch(`${APIURL}/routines`);
      const result = await response.json();
      console.log('result', result);
      if (result.error) throw result.error;
      return result;

  } catch (err) {
      console.error('Trouble fetching routines', err)
  }
};
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
      }*/