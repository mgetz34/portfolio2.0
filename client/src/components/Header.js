import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
            <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
                <Link className="text-dark" to="/">
                    <h1 className="m-0" style={{ fontSize: '3rem' }}>
                        Michael Getz
                    </h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;