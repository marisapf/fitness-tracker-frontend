import React from "react";

const Home = ({ token, user }) => {
  return (
    <>
      {token ? (
        <div id="home">
          <h1 className="home-page-words">
            Welcome to Fitness Trackr Home Page, {user.username} !
          </h1>
        </div>
      ) : (
        <div>
          <h2 className="home-page-words">
            Welcome to Fitness Trackr Home Page.
          </h2>
        </div>
      )}
    </>
  );
};
export default Home;


