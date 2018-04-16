import React, { Component } from 'react';
import { firebaseApp } from '../../firebase';
import styles from './App.css';

class App extends Component {

    _signOut() {
        firebaseApp.auth().signOut();
    }
    render() {
        return (
            <div>
                <button onClick={() => {this._signOut()}}>
                    Sign Out
                </button>
            </div>
        );
    }
}
export default App;