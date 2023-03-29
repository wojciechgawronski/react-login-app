import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import NavB from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Nav = () => {
    return <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavB className="me-auto">
                        <NavB.Link><NavLink to='/'>Start</NavLink></NavB.Link>
                        <NavB.Link><NavLink to='/login'>Login</NavLink></NavB.Link>
                        <NavB.Link><NavLink to='/account'>Account</NavLink></NavB.Link>
                    </NavB>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <br></br>
        
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <NavLink className="navbar-brand" to='/'>Start</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"><NavLink className="nav-link" to='/'>Start</NavLink></li>
                        <li class="nav-item"><NavLink className="nav-link" to='/login'>Login</NavLink></li>
                        <li class="nav-item"><NavLink className="nav-link" to='/account'>Account</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </> 
}

export default Nav; 