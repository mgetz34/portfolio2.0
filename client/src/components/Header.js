import React from "react"
import './Header.css'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="navbar-brand text-light" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link text-light">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link text-light" >Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link text-light">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className="nav-link text-light">Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;