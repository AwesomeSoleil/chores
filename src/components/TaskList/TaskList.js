import React, { Component } from 'react';
import { taskRef } from '../../firebase';
import styles from './TaskList.css';

class TaskList extends Component {

    componentDidMount() {
        taskRef.on('value', snapshot => {
            let tasks = [];
            snapshot.forEach(task => {
                const { email, title } = task.val();
                tasks.push({ email, title });
            });
            console.log(tasks);
        });
    }
    render() {
        return (
            <div>Task List</div>
        );
    }
}

export default TaskList;