import React from 'react';
import "./Home.css"
import background from "../../images/3d-abstract-wave-pattern-background.jpg";

function Home() {
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <h1 className='header'>This is home</h1>
        </div>
    )
}

export default Home;


