import React from 'react';

const Home = ({ token, user, userMessage }) => {
console.log('login, home, token, user, user.username:', token, user, user.username)//displays
console.log('home, userMessage:', userMessage); //displays nothing????

    return (
            
             token ? 
            <div id="home">
                <h1 className='home-page-words'>Welcome to Fitness Trackr Home Page, {user.username} !</h1>
                <h3>{userMessage}</h3>
            </div> : 
            <div>
                <h2 className='home-page-words'>Welcome to Fitness Trackr Home Page.</h2>
                <h3>{userMessage}</h3>
            </div> 
            
    )
}
export default Home;

/*

*/