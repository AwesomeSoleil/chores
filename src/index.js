import React from 'react';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import App from './components/App/App';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import styles from './index.css';

const history = createBrowserHistory();
const store = createStore(reducer);

/* onAuthStateChanged attaches observer; observer gets called whenever the user's
   sign-in state changes. When a user successfully signs in, I can get information
   about the user in the observer.
*/
firebaseApp.auth().onAuthStateChanged(
    user => {
        if (user) {
            store.dispatch(logUser(user.email));
            history.push('/app');
        } else {
            history.replace('/signin');
        }
    }
);

ReactDOM.render(
    <Provider store={ store }>
        <Router path='/' history={ history }>
            <div className={ styles.index }>
                <Route path='/app' component={ App } />
                <Route path='/signin' component={ SignIn } />
                <Route path='/signup' component={ SignUp } />
            </div>
        </Router>
    </Provider>,
    document.querySelector('#root')
);