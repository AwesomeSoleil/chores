import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completedTaskRef, taskRef } from '../../firebase';
import styles from './TaskItem.css';

class TaskItem extends Component {

    _clickHandler = () => {
        const id = this.props.task.entryKey;
        completedTaskRef.push(
            {
                email: this.props.user.email,
                title: this.props.task.title,
                id
            }
        );
        taskRef.child(id).remove();
    };

    render() {
        return (
            <div className={styles.task_list_item}>
                <div className={styles.task_list_item_title}>
                    { this.props.task.title }
                </div>
                <div className={styles.task_list_item_user}>
                    submitted by { this.props.task.email }
                </div>
                <div className={styles.task_list_item_delete}>
                    <button
                        onClick={ () => {this._clickHandler()} }
                    >
                        done
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const user = state.user;
    return { user };
};

export default connect(mapStateToProps)(TaskItem);