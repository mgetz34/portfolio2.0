import React from 'react';
import './Projects.css'


function Projects() {
    return (
        <React.Fragment>
            <div className="card" style={{ width: '18rem' }}>
                <img src={require('../../images/hangman.png')} className="card-img-top" alt="app homescreen" />
                <div className="card-body">
                    <h5 className="card-title">Hangman Application</h5>
                    <p className="card-text">A fun app to play Hangman after logging in and creating a profile</p>
                    <a href="https://crimekermitterhangman.herokuapp.com/"
                        target="_blank" rel="noreferrer" className="btn btn-primary">Application</a>
                    <a href="https://github.com/cbaird21/Hangman_app/"
                        target="_blank" rel="noreferrer" className="btn btn-primary">Repo</a>
                </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
                <img src={require('../../images/nps.png')} className="card-img-top" alt="app homescreen" />
                <div className="card-body">
                    <h5 className="card-title">National Parks Search</h5>
                    <p className="card-text">Search for the next fun vaction with the family!</p>
                    <a href="https://slimshady079.github.io/National-Parks-Search/"
                        target="_blank" rel="noreferrer" className="btn btn-primary">Application</a>
                    <a href="https://github.com/Slimshady079/National-Parks-Search/"
                        target="_blank" rel="noreferrer" className="btn btn-primary">Repo</a>
                </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
                <img src={require('../../images/cs.png')} className="card-img-top" alt="app homescreen" />
                <div className="card-body">
                    <h5 className="card-title">Coming Soon!!</h5>
                    <p className="card-text">Project 3 to be released upon completion</p>
                    <a href="#"
                        target="_blank" rel="noreferrer" className="btn btn-primary">Application</a>
                    <a href="#"
                        target="_blank" rel="noreferrer" className="btn btn-primary">Repo</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projects;



