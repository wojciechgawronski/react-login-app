import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return <div>
        <ul>
            <li><NavLink to='/'>Start</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/account'>Account</NavLink></li>
        </ul>
    </div>
}

export default Nav; 