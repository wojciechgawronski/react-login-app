import React from "react";
import SiteTitle from "../../components/SiteTitle/SiteTitle";
import Input from "../../components/form/Input/Input";
import Button from "../../components/form/Button/Button";
import { Form, redirect, useActionData } from "react-router-dom";

const RegisterView = () => {

    const data = useActionData();

    return <>
        <main>
            <div className="container">
                
                <SiteTitle>Register View</SiteTitle>

                <div className="row">
                    <div className="col col-md-6">

                        {data && data.errors && <ul>
                            {data.errors.name && <li>{data.errors.name[0]}</li>}
                            {data.errors.email && <li>{data.errors.email[0]}</li>}
                            {data.errors.password && <li>{data.errors.password[0]}</li>}
                        </ul>}

                        <Form method="post">
                            <Input 
                                id={'name'}
                                name={'name'}
                                type={'text'}
                                labelText={'Name'} 
                                required
                            />
                            <Input 
                                id={'email'}
                                name={'email'}
                                type={'text'}
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

                            <Input 
                                id={'password_confirmation'}
                                name={'password_confirmation'}
                                type={'password'}
                                labelText={'Repeat password'} 
                            />   

                            <Button>Register</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default RegisterView;

export async function action({ request }) {

    const data = await request.formData();

    const registerData = {
        email: data.get('email'),
        name: data.get('name'),
        password: data.get('password'),
        password_confirmation: data.get('password_confirmation'),
    }

    const url = `${process.env.REACT_APP_BACKEND_SERVER}/register`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(registerData)
    });

    const responseData = await response.json();

    if (responseData.errors) {
        const data = {};
        data.errors = responseData.errors
        return data;
    }

    if (responseData.message === 'register_ok') {
        return redirect('/login');
    }

    return;
}