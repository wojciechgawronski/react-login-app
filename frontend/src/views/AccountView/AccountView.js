import React from "react";
import SiteTitle from "../../components/SiteTitle/SiteTitle";

const AccountView = () => {
    return <>
        <main>
            <div className="container">
                
                <SiteTitle>AccountView</SiteTitle>
                <div className="row">
                    <div className="col">
                        <div className="lead">
                            <ul>
                                <li>Name</li>
                                <li>Email</li>
                                <li>Change password</li>
                                <li>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default AccountView; 