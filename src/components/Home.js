import React from 'react';
import food from  '../assets/cookingimg.jpeg'


const Home = () => {
    return(
        <div className="w3-container">
            <h2 class="w3-center w3-animate-left">
            Welcome to your cookbook</h2>
            <br />
            <img alt="homeimg" src={food} height="600px" width="700px" />
        </div>
    )
}

export default Home;