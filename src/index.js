import React from 'react';
import reducer from './reducers';
import { applyMiddleware, createStore } from 'redux'; //remove middleWare
import { createLogger } from 'redux-logger'; // for logging purposes only, remove before build
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
const logger = createLogger(); // remove befor build
const store = createStore(reducer, applyMiddleware(logger)); // simplify before build

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