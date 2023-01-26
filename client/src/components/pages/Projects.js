import React from 'react';
import './Projects.css'



function Projects() {
    return (
        <React.Fragment>
            <div class="row justify-content-md-center">
                <h1>Group Projects</h1>
                <div className="card col-6 col-md-4" style={{ width: '18rem' }}>
                    <img src={require('../../images/hangman.png')} className="card-img-top img-thumbnail" alt="app homescreen" />
                    <div className="card-body">
                        <h5 className="card-title">Hangman Application</h5>
                        <p className="card-text">Game of playing Hangman guessing western themed words.</p>
                        <a href="https://crimekermitterhangman.herokuapp.com/"
                            target="_blank" rel="noreferrer" className="btn btn-primary">Application</a>
                        <a href="https://github.com/cbaird21/Hangman_app/"
                            target="_blank" rel="noreferrer" className="btn btn-primary">Repo</a>
                        <h5>Technogies Used</h5>
                        <p>JS, Handlebars.js, Express.js, MySQL, RESTful api</p>
                    </div>
                </div>

                <div className="card col-6 col-md-4" style={{ width: '18rem' }}>
                    <img src={require('../../images/nps.png')} className="card-img-top img-thumbnail" alt="app homescreen" />
                    <div className="card-body ">
                        <h5 className="card-title">National Parks Search</h5>
                        <p className="card-text">Search for the next fun vaction with the family!</p>
                        <a href="https://slimshady079.github.io/National-Parks-Search/"
                            target="_blank" rel="noreferrer" className="btn btn-primary">Application</a>
                        <a href="https://github.com/Slimshady079/National-Parks-Search/"
                            target="_blank" rel="noreferrer" className="btn btn-primary">Repo</a>
                        <h5>Technogies Used</h5>
                        <p>JQuery, Bootstrap, HTML, JS</p>
                    </div>
                </div>

                <div className="card col-6 col-md-4" style={{ width: '18rem' }}>
                    <img src={require('../../images/frogr.png')} className="card-img-top img-thumbnail" alt="app homescreen" />
                    <div className="card-body">
                        <h5 className="card-title">frogr</h5>
                        <p className="card-text">Full-stack React social media app!</p>
                        <a href="https://frogr-app.herokuapp.com/"
                            target="_blank" rel="noreferrer" className="btn btn-primary">Application</a>
                        <a href="https://github.com/cbaird21/frogr"
                            target="_blank" rel="noreferrer" className="btn btn-primary">Repo</a>
                        <h5>Technogies Used</h5>
                        <p>GraphQL, Express.js, Node.js, MongoDB, React</p>
                    </div>
                </div>

                <h1>Solo Endeavors</h1>

                <div className="card col-6 col-md-4" style={{ width: '18rem' }}>
                    <img src={require('../../images/te.png')} className="card-img-top img-thumbnail" alt="app homescreen" />
                    <div className="card-body ">
                        <h5 className="card-title">Text editor</h5>
                        <p className="card-text">Have a note, jot it down!</p>
                        <a href="https://serene-spire-38646.herokuapp.com/"
                            target="_blank" rel="noreferrer" className="btn btn-primary">Application</a>
                        <a href="https://github.com/mgetz34/text-editor"
                            target="_blank" rel="noreferrer" className="btn btn-primary">Repo</a>
                        <h5>Technogies Used</h5>
                        <p>IndexedDB, Webpack, Service-Workers, PWA functionality</p>
                    </div>
                </div>

                <div className="card col-6 col-md-4" style={{ width: '18rem' }}>
                    <img src={require('../../images/et.png')} className="card-img-top img-thumbnail" alt="app homescreen" />
                    <div className="card-body ">
                        <h5 className="card-title">Employee Tracker</h5>
                        <p className="card-text">An interactive node.js program to produce a roster!</p>
                        <a href="https://drive.google.com/file/d/112mHdbj7fAZLw2NRXPhKCWUggpRvVpFB/view"
                            target="_blank" rel="noreferrer" className="btn btn-primary">Video Walk-Thru</a>
                        <a href="https://github.com/mgetz34/employee-tracker"
                            target="_blank" rel="noreferrer" className="btn btn-primary">Repo</a>
                        <h5>Technogies Used</h5>
                        <p>Node.js, NPM, Inquirer, MySQL</p>
                    </div>
                </div>

                <div className="card col-6 col-md-4" style={{ width: '18rem' }}>
                    <img src={require('../../images/pg.png')} className="card-img-top img-thumbnail" alt="app homescreen" />
                    <div className="card-body ">
                        <h5 className="card-title">Password Generator</h5>
                        <p className="card-text">Use this for your next secure password!</p>
                        <a href="https://mgetz34.github.io/password-generator/"
                            target="_blank" rel="noreferrer" className="btn btn-primary">Application</a>
                        <a href="https://github.com/mgetz34/password-generator"
                            target="_blank" rel="noreferrer" className="btn btn-primary">Repo</a>
                        <h5>Technogies Used</h5>
                        <p>HTML, CSS, JS</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projects;



