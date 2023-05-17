import React from "react";
import SiteTitle from "../../components/SiteTitle/SiteTitle";

const StartView = () => {
    return <>
        <main>
            <div className="container">
                
                <SiteTitle>Start View</SiteTitle>
                
                <div className="row">
                    <div className="col">
                        <p className="lead">Simple app for register / login.</p>
                        <article className="small">
                            <p>----</p>
                            <p>TO DO</p>
                            <ol>
                                <li>Auth Token</li>
                                <li>DELETE BUTTON</li>
                                <li>Pagination: Class Compoment - url change</li>
                                <li>Pagination</li>
                                <li>Flash messages</li>
                                <li>Login, Register: CRUD, backend: SYMFONY API</li>
                            </ol>
                            <p>DONE:</p>
                            <ul>
                                <li>Pagination: Class Compoment</li>
                                <li>Article: CRUD, backend</li>
                                <li>Article: CRUD, frontend</li>
                                <li>Login, Register: CRUD, frontend</li>
                                <li>Login, Register: CRUD, backend: LARAVEL API</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default StartView; 