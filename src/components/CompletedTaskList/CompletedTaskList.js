import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completedTaskRef } from '../../firebase';
import { setCompleted } from '../../actions';
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
                this.props.setCompleted(completedTasks);
            }
        );
    }

    render() {
        return (
            <div>
                {
                    this.props.completedTasks.map(
                        (completedTask, index) => {
                            return <div key={ index }>{completedTask.title}</div>
                        }
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const completedTasks = state.completedTasks;
    return { completedTasks };
};

export default connect(mapStateToProps, { setCompleted })(CompletedTaskList);