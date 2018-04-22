import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completedTaskRef } from '../../firebase';
import CompletedTaskItem from '../CompletedTaskItem/CompletedTaskItem';
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

    _renderCompletedTaskList = (completedTasks) => {
        return completedTasks.map((completedTask, index) => {
                return (
                    <li key={ index }
                        className={styles.task_list_item}
                    >
                        <CompletedTaskItem completedTask={ completedTask }/>
                    </li>
                );
            }
        );
    };

    _clearList = () => {
        completedTaskRef.set([]);
    };

    render() {
        return (
            <div>
                <ul className={styles.task_list}>
                    { this._renderCompletedTaskList(this.props.completedTasks) }
                </ul>
                { this.props.completedTasks.length ?
                    <button className={styles.clear_all}
                        onClick={() => { this._clearList() }}>
                        clear all
                    </button> : null 
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