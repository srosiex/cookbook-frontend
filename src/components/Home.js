import React from 'react';
import food from  '../assets/cookingimg.jpeg'


const Home = () => {
    return(
        <div>
            Welcome to your cookbook
            <br />
            <img alt="homeimg" src={food} height="600px" width="700px" />
        </div>
    )
}

export default Home;