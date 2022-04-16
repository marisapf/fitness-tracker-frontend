FROM src/api/index

/* line 28, register 

if (result.error) throw result.error;

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
      }

  //if (result.error) throw result.error;

   /* if (result) {
      await fetch(`${APIURL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${result.token}`,
        },
      });*/  

/*if (result.token) {
        history.push("/");
      }*/  
      

fetchAllRoutines
 //if (result.error) throw result.error;

createNewRoutine
 //if (result.error) throw result.error;

 createNewActivity
  //if (result.error) throw result.error;

 */
