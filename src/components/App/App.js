import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../../firebase';
import TaskList from '../TaskList/TaskList';
import CompleteTaskList from '../CompleteTaskList/CompleteTaskList';
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
                <h4>tasks</h4>
                <TaskList />
                <h4>completed tasks</h4>
                <CompleteTaskList />
                <hr />
                <button onClick={() => { this._signOut() }}>
                    Sign Out
                </button>
            </div>
        );
    }
}

export default App;