import React from "react";
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import background from "../src/components/background.jpg";
import "bootstrap/dist/css/bootstrap.css"

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/pages/Resume";


const App = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <Router>
                <div className="flex-column justify-flex-start min-100-vh">
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="/about"
                                element={<About />}
                            />
                            <Route
                                path="/contact"
                                element={<Contact />}
                            />
                            <Route
                                path="/projects"
                                element={<Projects />}
                            />
                            <Route
                                path="/resume"
                                element={<Resume />}
                            />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
