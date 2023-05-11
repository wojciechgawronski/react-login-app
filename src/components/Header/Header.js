import React from "react";
import Nav from "../Nav/Nav";

const Header = () => {
    return <header>
        <div className="container">
            <div className="my-2">
                <p className="lead mb-0">LoginApp |</p>
            </div>
            <Nav/>
            <hr></hr>
        </div>
    </header>
}

export default Header; 