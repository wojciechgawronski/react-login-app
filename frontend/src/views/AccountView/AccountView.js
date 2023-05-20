import React from "react";
import SiteTitle from "../../components/SiteTitle/SiteTitle";
import { useRouteLoaderData } from 'react-router';
import { getAuthToken } from "../../util/auth";

const AccountView = () => {

    const data = useRouteLoaderData('account-detail');
    const user = data.user; 

    return <>
        <main>
            <div className="container">
                
                <SiteTitle>AccountView</SiteTitle>
                <div className="row">
                    <div className="col">
                        <div className="lead">
                            <ul>
                                <li>Name: <span className="fw-bold ms-3">{user.name}</span></li>
                                <li>Email: <span className="fw-bold ms-3"> {user.email}</span></li>
                                <li className="small text-muted">Change password</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default AccountView; 

export async function accountDataLoader() {

    const url = process.env.REACT_APP_BACKEND_SERVER+`/account`;
    const token = getAuthToken();

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });

    const responseData = await response.json();

    return responseData;
}