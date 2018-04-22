import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './CompletedTaskItem.css';

class CompletedTaskItem extends Component {
    render() {
        return (
            <div className={styles.task_list_item}>
                <div className={styles.task_list_item_title}>
                    { this.props.completedTask.title }
                </div>
                <div className={styles.task_list_item_user}>
                    performed by { this.props.completedTask.email }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const user = state.user;
    return { user };
};

export default CompletedTaskItem;