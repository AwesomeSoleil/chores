import React, { Component } from 'react';
import { firebaseApp } from '../../firebase';
import styles from './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        };
    }

    _signUp = (event) => {
        const userEmail = this.state.email;
        const userPassword = this.state.password;
        firebaseApp.auth()
                .createUserWithEmailAndPassword(userEmail, userPassword)
                .catch(
                    (error) => {
                        console.log('sign up error', error);
                        this.setState({ error });
                    }
                );
    };
    render() {
        return (
            <form>
                <fieldset>
                    <legend>Sign Up</legend>
                    <label>
                        email
                        <input type='email'
                            placeholder='email'
                            onChange={event => { this.setState({ email: event.target.value }) }}
                        />
                    </label>
                    <label>
                        <input type='password'
                            placeholder='password'
                            onChange={event => { this.setState({ password: event.target.value }) }}
                        />
                    </label>
                    <button type='button' onClick={() => { this._signUp() }}>Sign Up</button>
                </fieldset>
                <p>{ this.state.error.message }</p>
            </form>
        );
    }
}
export default SignUp;