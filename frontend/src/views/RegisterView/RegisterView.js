import React from "react";
import SiteTitle from "../../components/SiteTitle/SiteTitle";
import Input from "../../components/form/Input/Input";
import Button from "../../components/form/Button/Button";

class RegisterView extends React.Component
{
    render() {
        return <>
            <main>
                <div className="container">
                    
                    <SiteTitle>Register View</SiteTitle>

                    <div className="row">
                            <div className="col col-md-6">
                                <form className="mt-4" onSubmit={this.formHandler}>
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

                                    <Input 
                                        id={'password'}
                                        name={'password'}
                                        type={'password'}
                                        labelText={'Repeat password'} 
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

export default RegisterView;