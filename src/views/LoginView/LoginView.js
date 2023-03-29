import React, {useEffect, useState} from "react";
import Button from "../../components/form/Button/Button";
import Input from "../../components/form/Input/Input";
import SiteTitle from "../../components/SiteTitle/SiteTitle";

class LoginView extends React.Component
{
    formHandler(e) {
        e.preventDefault();
    }

    render() {
        return <>
            <main>
                <div className="container">

                    <SiteTitle>Login Form</SiteTitle>

                    <div className="row">
                        <div className="col col-md-6">
                            <form className="mt-4" onSubmit={this.formHandler}>
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
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    }
}

export default LoginView; 