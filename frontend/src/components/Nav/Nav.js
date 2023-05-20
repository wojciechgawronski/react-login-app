import React from "react";
import { NavLink, useRouteLoaderData, Form } from "react-router-dom";

const Nav = () => {

    const token = useRouteLoaderData('rootElement');

    const buttonLogoutStyle = {
        background: 'none',
        border: 'none',
    }

    return <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'>Start</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link" to='/'>Start</NavLink></li>
         
       
                        <li className="nav-item"><NavLink className="nav-link" to='/articles-list'>Articles List</NavLink></li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Articles
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink className="dropdown-item" to='/articles-list'>Articles List</NavLink>
                                </li>
                                <li><NavLink className="dropdown-item" to='/articles' end>Articles</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/articles/new' end>New Article</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        {token && (<>
                            <li className="nav-item">
                                <Form action='/logout' method='POST'>
                                    <button style={buttonLogoutStyle} className="nav-link">Logout</button>
                                </Form>
                            </li>
                            <li className="nav-item"><NavLink className="nav-link" to='/account'>Account</NavLink></li>
                        </>)}
                        {!token && (<>
                            <li className="nav-item"><NavLink className="nav-link" to='/login'>Login</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to='/register'>Register</NavLink></li>
                        </>)}
                    </ul>
                </div>
            </div>
        </nav>
    </> 
}

export default Nav; 