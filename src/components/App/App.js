import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../../firebase';
import TaskList from '../TaskList/TaskList';
import AddTask from '../AddTask/AddTask';
import styles from './App.css';

class App extends Component {

    _signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div>
                <h3>things to be done</h3>
                <AddTask />
                <TaskList />
                <p>Signed in as {this.props.email}</p>
                <button onClick={() => {this._signOut()}}>
                    Sign Out
                </button>
            </div>
        );
    }
}

const getUserEmail = (state) => {
    return { email: state.email };
};

export default connect(getUserEmail)(App);