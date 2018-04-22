import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskRef } from '../../firebase';
import { setTasks } from '../../actions';
import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.css';

class TaskList extends Component {

    componentDidMount() {
        taskRef.on('value', snapshot => {
            let tasks = [];
            snapshot.forEach(task => {
                const { email, title } = task.val();
                const entryKey = task.key;
                tasks.push({ email, title, entryKey });
            });
            this.props.setTasks(tasks);
        });
    }

    _renderTaskList = (tasks) => {
        return tasks.map(task => {
                return (
                    <li key={ task.entryKey }>
                        <TaskItem task={ task } />
                    </li>
                );
            }
        );
    };

    render() {
        return (
            <ul className={styles.task_list}>
                { this._renderTaskList(this.props.tasks) }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    const tasks = state.tasks;
    return { tasks };
};

// in the connect below I'm using shortcut passing the action creator setTasks,
// without defining mapDispatchToProps,
// and since { setTasks: setTasks}, the argument is condensed to { setTasks }

export default connect(mapStateToProps, { setTasks })(TaskList);