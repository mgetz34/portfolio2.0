import React from 'react';
import "./Home.css"


function Home() {
    return (
        <div>
            <h1 className='header'>Michael Getz - Full Stack Web Developer </h1>
            <img src={require('../../images/hs.png')} className="card-img-top" alt="head-shot" />

        </div>
    )
}

export default Home;


