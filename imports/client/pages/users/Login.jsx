import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            error: null
        }
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                FlowRouter.go('home');
            } else {
                this.setState({error: err.reason});
            }
        });
    };

    render() {
        return (
            <main className="cc-main">
                <AutoForm schema={LoginSchema} onSubmit={this.onSubmit}>
                    {this.state.error &&
                    <div className="error">{this.state.error}</div>
                    }
                    <div className="cc-form__row">
                        <AutoField name="email"/>
                        <ErrorField name="email"/>
                    </div>
                    <div className="cc-form__row">
                        <AutoField name="password" type="password"/>
                        <ErrorField name="password"/>
                    </div>
                    <div className="cc-form__row-submit">
                        <button type="submit" className="cc-button cc-button--bg-main">
                            Login
                        </button>
                    </div>
                </AutoForm>
            </main>
        )
    }
}

const LoginSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String}
});

export default Login;