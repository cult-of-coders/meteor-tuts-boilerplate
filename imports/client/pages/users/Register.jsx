import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Register extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    onSubmit = (data) => {
        const {firstName, lastName, email, password} = data;

        Accounts.createUser({
            email,
            password,
            profile: {firstName, lastName}
        }, (err) => {
            if (!err) {
                FlowRouter.go('home');
            } else {
                this.setState({
                    error: err.reason
                })
            }
        })
    };

    render() {
        return (
            <main className="cc-main">
                <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit}>
                    {this.state.error &&
                    <div className="error">{this.state.error}</div>
                    }
                    <div className="cc-form__row">
                        <AutoField name="firstName"/>
                        <ErrorField name="firstName"/>
                    </div>
                    <div className="cc-form__row">
                        <AutoField name="lastName"/>
                        <ErrorField name="lastName"/>
                    </div>
                    <div className="cc-form__row">
                        <AutoField name="email"/>
                        <ErrorField name="email"/>
                    </div>
                    <div className="cc-form__row">
                        <AutoField name="password" type="password"/>
                        <ErrorField name="password"/>
                    </div>
                    <div className="cc-form__row">
                        <AutoField name="confirm_password" type="password"/>
                        <ErrorField name="confirm_password"/>
                    </div>
                    <div className="cc-form__row-submit">
                        <button type="submit" className="cc-button cc-button--bg-main">
                            Register
                        </button>
                    </div>
                </AutoForm>
            </main>
        )
    }
}

const RegisterSchema = new SimpleSchema({
    firstName: {type: String},
    lastName: {type: String},
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String},
    confirm_password: {
        type: String,
        custom() {
            if (this.value != this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
});

export default Register;