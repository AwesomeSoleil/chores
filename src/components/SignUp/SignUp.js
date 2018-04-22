import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                        this.setState({ error });
                    }
                );
    };

    render() {
        return (
            <div>
                <h3>sign up</h3>
                <form className={styles.sign_up_form}>
                    <div className={styles.sign_up_input_group}>
                        <label htmlFor='sign_up_email'>email:</label>
                        <input type='email'
                            id='sign_up_email'
                            placeholder='your email'
                            onChange={event => { this.setState({ email: event.target.value }) }}
                        />
                    </div>
                    <div className={styles.sign_up_input_group}>
                        <label htmlFor='sign_up_password'>password:</label>
                        <input type='password'
                            id='sign_up_password'
                            placeholder='your password'
                            onChange={event => { this.setState({ password: event.target.value }) }}
                        />
                    </div>
                    <div className={styles.sign_up_submit_group}>
                        <button type='button' onClick={() => { this._signUp() }}>
                            Sign Up
                        </button>
                        <div className={styles.sign_up_link}>
                            <Link to='/signin'>I'd better sign in</Link>
                        </div>
                        <p className={styles.error}>{ this.state.error.message }</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;