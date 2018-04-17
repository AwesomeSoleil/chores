import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskRef } from '../../firebase';
import { setTasks } from '../../actions';
import styles from './TaskList.css';

class TaskList extends Component {

    componentDidMount() {
        taskRef.on('value', snapshot => {
            let tasks = [];
            snapshot.forEach(task => {
                const { email, title } = task.val();
                tasks.push({ email, title });
            });
            this.props.setTasks(tasks);
        });
    }
    render() {
        return (
            <div>Task List</div>
        );
    }
}

const mapStateToProps = (state) => {
    const tasks = state.tasks;
    return {
        tasks
    };
};

// in the connect below I'm using shortcut passing the action creator setTasks,
// without defining mapDispatchToProps,
// and since { setTasks: setTasks}, the argument is condensed to { setTasks }

export default connect(mapStateToProps, { setTasks })(TaskList);