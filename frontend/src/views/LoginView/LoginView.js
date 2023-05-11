import { Form, useActionData, json } from 'react-router-dom';
import Button from "../../components/form/Button/Button";
import Input from "../../components/form/Input/Input";
import SiteTitle from "../../components/SiteTitle/SiteTitle";

const LoginView = () => {

    const data = useActionData();

    return <>
        <main>
            <div className="container">

                <SiteTitle>Login Form</SiteTitle>

                {data && data.message && <p>{data.message}</p>}

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

    const response = await fetch('http://127.0.0.1:8000/api/v1/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(loginData)
    });

    if (response.status === 404) {
        throw json({ status: 404, message: 'Server error.' })
    }

    if (response.status === 401) {
        return response;
    }

    if (response.status === 200) {
        const responseData = await response.json();
        
        // manage user and token
        if (responseData.email && responseData.token) {
            localStorage.setItem('userEmail', responseData.email);
            localStorage.setItem('userToken', responseData.token);
            alert('Authorized');
        }
        
    }

    if (!response.ok) {
        throw json({status: 500, statusText: '500 Server error.'})
    }

    return 1;
}