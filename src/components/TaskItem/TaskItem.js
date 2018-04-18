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
            <div>
                <strong>
                    { this.props.task.title }
                </strong>
                &nbsp;
                <span>
                    submitted by <em>{ this.props.task.email }</em>
                </span>
                <button
                    className={ styles }
                    onClick={ () => {this._clickHandler()} }
                >
                    done
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const user = state.user;
    return { user };
};

export default connect(mapStateToProps)(TaskItem);