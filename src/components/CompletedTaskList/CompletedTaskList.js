import React, { Component } from 'react';
import { completedTaskRef } from '../../firebase';
import styles from './CompletedTaskList.css';

class CompletedTaskList extends Component {

    componentDidMount() {
        completedTaskRef.on(
            'value', snapshot => {
                let completedTasks = [];
                snapshot.forEach(task => {
                    const { email, title } = task.val();
                    completedTasks.push({ email, title });
                });
                console.log(completedTasks);
            }
        );
    }
    render() {
        return (
            <div>completed tasks</div>
        );
    }
}

export default CompletedTaskList;