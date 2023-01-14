import React from 'react';
// Import hooks from React Router
import { useLocation, useNavigate } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    // We retrieve the current `location` object data from React Router
    const location = useLocation();
    // We get React Router's navigate object so we can access and adjust browser history
    const navigate = useNavigate();
    return (
        <footer className="w-100 mt-auto text-dark p-4">
            <a href="https://www.linkedin.com/in/michael-getz-340/" target="_blank" rel="noreferrer"><img src={require('../images/li.png')} alt="linked-in" /></a>

            <a href="https://github.com/mgetz34" target="_blank" rel="noreferrer"><img src={require('../images/gh.png')} alt="git-hub" /></a>
            <div className="container text-center mb-5">
                {location.pathname !== '/' && (
                    <button
                        className="btn btn-dark mb-3"
                        // Go back to the previous page in our browser's history. -1 represents one page back in the browser history.
                        onClick={() => navigate(-1)}
                    >
                        &larr; Go Back
                    </button>
                )}
            </div>
        </footer>
    );
};

export default Footer;