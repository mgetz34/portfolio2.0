import React from 'react';
import { Link } from "react-router-dom"
import './About.css'


const About = () => {
    return (
        <div className="col-sm-8">
            <Link className="text-dark" to="/about">
                <h1 className="m-0" style={{ fontSize: '3rem' }}>
                    My name is Michael Getz. I am a full-stack web
                    developer with a prefernce for the back-end. I have a BS of Geology from Colorado Mesa University.
                    Skills include teamwork oriented problem solving, adaptability,
                    and utilization of technical resources.
                </h1>
            </Link>

        </div>
    )
}
export default About;
