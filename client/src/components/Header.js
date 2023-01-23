import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="navbar-brand text-dark">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link text-dark">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link text-dark" >Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link text-dark">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className="nav-link text-dark">Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;