import { Form, useActionData, json, redirect } from 'react-router-dom';
import Button from "../../components/form/Button/Button";
import Input from "../../components/form/Input/Input";
import SiteTitle from "../../components/SiteTitle/SiteTitle";

const LoginView = () => {

    const data = useActionData();

    return <>
        <main>
            <div className="container">

                <SiteTitle>Login Form</SiteTitle>

                {data && data.errors && <ul>
                    {data.errors.email && <li>{data.errors.email[0]}</li>}
                    {data.errors.password && <li>{data.errors.password[0]}</li>}
                </ul>}

                {data && data.message && <ul>
                    {data.message && <li>{data.message}</li>}
                </ul>}

                <div className="row">
                    <div className="col col-lg-6">
                        <Form method='post'>
                            <Input 
                                id={'email'}
                                name={'email'}
                                type={'email'}
                                labelText={'Email address'} 
                                required
                                helpText={'We\'ll never share your email with anyone else.'}
                            />

                            <Input 
                                id={'password'}
                                name={'password'}
                                type={'password'}
                                labelText={'Password'}
                            />    

                            <Button>Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </main>
    </>
}


export default LoginView;


export async function action({ request }) {

    const data = await request.formData();

    const loginData = {
        email: data.get('email'),
        password: data.get('password')
    }

    const url = `${process.env.REACT_APP_BACKEND_SERVER}/login`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(loginData)
    });

    const responseData = await response.json();

    if (response.status === 401) {
        console.log('401 Error');
        return responseData.errors;
    }

    if (responseData.errors) {
        const data = {};
        data.errors = responseData.errors
        return data;
    }

    if (responseData.message) {
        const data = {};
        data.message = responseData.message
        return data;
    }

    if (response.status === 404) {
        throw json({ status: 404, message: 'Server error.' })
    }

    if (response.status === 200 && responseData.token) {
        const tokenName = process.env.REACT_APP_BACKEND_LOCALSTORAGE_ACCESS_TOKEN_NAME;
        const uDataName = process.env.REACT_APP_BACKEND__LOCALSTORAGE_USER_DATA_NAME;
        localStorage.setItem(`${tokenName}`, responseData.token);
        localStorage.setItem(`${uDataName}`, JSON.stringify(responseData.user));
        return redirect('/account');
    }

    if (!response.ok) {
        throw json({status: 500, statusText: '500 Server error.'})
    }

    return;
}