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
            <form className={styles.sign_in_form}>
            <section className={styles.sign_in_form_group}>
                <h3>sign in</h3>
                <ul className={styles.sign_in_form_fields}>
                    <li>
                        <label htmlFor='sign_in_email'>email:</label>
                        <input type='email'
                            id='sign_in_email'
                            placeholder='your email'
                            onChange={event => { this.setState({ email: event.target.value }) }}
                        />
                    </li>
                    <li>
                        <label htmlFor='sign_in_password'>password:</label>
                        <input type='password'
                            id='sign_in_password'
                            placeholder='your password'
                            onChange={event => { this.setState({ password: event.target.value }) }}
                        />
                    </li>
                </ul>
            </section>
            <section className={styles.sign_in_form_submit}>
                <button type='button' onClick={() => { this._signIn() }}>Sign In</button>
                <div>
                    <Link to='/signup'>I'm new here and have to sign up</Link>
                </div>
                <p>{ this.state.error.message }</p>
            </section>
            </form>
        );
    }
}
export default SignIn;