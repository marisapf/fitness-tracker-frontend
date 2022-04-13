import React from 'react';

const Home = ({ token, user, userMessage }) => {

    return (

        token && user.username ?

            <div id="home">
                <h1 id='home-page-words'>Welcome to Fitness Trackr {user.username} !</h1>
                <h2>{userMessage}</h2>
            </div> :
            <div>
                <h1 id='home-page-words'>Welcome to Fitness Trackr</h1>
                <h2>{userMessage}</h2>
            </div>
    )
}
export default Home;