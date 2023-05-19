import { redirect } from "react-router-dom";

export function getAuthToken () {
    const tokenName = process.env.REACT_APP_BACKEND_LOCALSTORAGE_ACCESS_TOKEN_NAME;
    const token = localStorage.getItem(`${tokenName}`);
    
    if (!token) {
        return null;
    }

    return token;
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader()
{
    const token = getAuthToken();

    if (!token) {
        return redirect('/login')
    }

    return null; 
}

export function logoutAction () {
    const userTokenName = process.env.REACT_APP_BACKEND_LOCALSTORAGE_ACCESS_TOKEN_NAME;
    const userDataName = process.env.REACT_APP_BACKEND__LOCALSTORAGE_USER_DATA_NAME;
    localStorage.removeItem(userTokenName);
    localStorage.removeItem(userDataName);
    return redirect('/');
}