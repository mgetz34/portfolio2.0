import React from 'react';
import { Link } from "react-router-dom"
import './About.css'


const About = () => {
    return (
        <div className="col-sm-8">
            <Link className="text-dark" to="/about">
                <h1 className="m-0 opacity-75" style={{ fontSize: '3rem' }}>
                    Hi! I'm Michael Getz. I am a MERN-stack web
                    developer with a preference for back-end technologies like Express, GraphQL and MySQL.
                    Skills include teamwork oriented problem solving, adaptability,
                    and utilization of technical resources. Education includes a full-stack web certification
                    from the University of Denver and a BS of Geology from Colorado Mesa University.
                </h1>
            </Link>

        </div>
    )
}
export default About;
