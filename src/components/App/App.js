import React from 'react';
import { firebaseApp } from '../../firebase';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';
import CompletedTaskList from '../CompletedTaskList/CompletedTaskList';
import styles from './App.css';

const App = () => {
    const signOut = () => {
        firebaseApp.auth().signOut();
    };

    return (
        <div>
            <h3>things to be done</h3>
            <AddTask />
            <h4>tasks</h4>
            <TaskList />
            <h4>completed tasks</h4>
            <CompletedTaskList />
            <hr />
            <button className={styles.sign_out}
                onClick={() => { signOut() }}
            >
                sign out
            </button>
        </div>
    );
};

export default App;