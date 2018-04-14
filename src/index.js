import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { firebaseApp } from './firebase';
import App from './components/App/App';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import styles from './index.css';

firebaseApp.auth().onAuthStateChanged(
    user => {
        if (user) {
            console.log('user has signed in or up', user);
        } else {
            console.log('user has signed out or still needs to sign in');
        }
    }
);

ReactDOM.render(
    <BrowserRouter>
        <div className={styles.index}>
            <Route path='/app' component={ App } />
            <Route path='/signin' component={ SignIn } />
            <Route path='/signup' component={ SignUp } />
        </div>
    </BrowserRouter>,
    document.querySelector('#root')
);