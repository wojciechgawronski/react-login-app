import { Link, useRouteError } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ErrorPage = () => {

    const error = useRouteError();

    let title = 'An error occured.';
    let data = 'Something went wrong.'; 
    let message = null;

    if (error.status === 404) {
        title = error.status;
        message = error.statusText;
        data = error.data;
    }

    // 405 Method Not Allowed
    if (error.status === 405) {
        title = error.status;
        message = error.statusText;
        data = error.data;
    }

    if (error.status === 500) {
        title = error.status;
        message = error.statusText;
        data = error.data;
    }
    
    return <>
        <Header/>
            <div className="container">
                <h2>{title} {message}</h2>
                {data ?? <p>{data}</p>}
                <p className="small mt-3"><Link to="/">Back to start page</Link></p>
            </div>
        <Footer/>
    </>
}

export default ErrorPage;