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
            <div className={styles.container}>
                <h3>sign in</h3>
                <form className={styles.sign_in_form}>
                    <div className={styles.sign_in_input_group}>
                        <label htmlFor='sign_in_email'>email:</label>
                        <input type='email'
                            id='sign_in_email'
                            placeholder='your email'
                            onChange={event => { this.setState({ email: event.target.value }) }}
                        />
                    </div>
                    <div className={styles.sign_in_input_group}>
                        <label htmlFor='sign_in_password'>password:</label>
                        <input type='password'
                            id='sign_in_password'
                            placeholder='your password'
                            onChange={event => { this.setState({ password: event.target.value }) }}
                        />
                    </div>
                    <div className={styles.sign_in_submit_group}>
                        <button type='button' onClick={() => { this._signIn() }}>Sign In</button>
                        <div className={styles.sign_in_link}>
                            <Link to='/signup'>I'm new here and have to sign up</Link>
                        </div>
                        <p className={styles.error}>{ this.state.error.message }</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;