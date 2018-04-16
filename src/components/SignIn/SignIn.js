import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../../firebase';
import styles from './SignIn.css';

class SignIn extends Component {
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

    _signIn = (event) => {
        const userEmail = this.state.email;
        const userPassword = this.state.password;
        firebaseApp.auth()
                .signInWithEmailAndPassword(userEmail, userPassword)
                .catch(
                    (error) => {
                        console.log('sign in error', error);
                        this.setState({ error });
                    }
                );
    };

    render() {
        return (
            <form>
                <fieldset>
                    <legend>Sign In</legend>
                    <label>
                        email
                        <input type='email'
                            placeholder='email'
                            onChange={event => { this.setState({ email: event.target.value }) }}
                        />
                    </label>
                    <label>
                        password
                        <input type='password'
                            placeholder='password'
                            onChange={event => { this.setState({ password: event.target.value }) }}
                        />
                    </label>
                    <button type='button' onClick={() => { this._signIn() }}>Sign Up</button>
                    <div>
                        <Link to='/signup'>I'm new here and have to sign up</Link>
                    </div>
                </fieldset>
                <p>{ this.state.error.message }</p>
            </form>
        );
    }
}
export default SignIn;