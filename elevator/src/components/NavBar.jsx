import React from 'react'
import '../components/NavBar.css'
import { Link } from 'react-router'
import logo from '../assets/logo.png'

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  px-5 sticky">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">
                Home
              </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/About">
                About
              </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/Services">
                Services
              </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/Contact">
                Contact
              </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default NavBar