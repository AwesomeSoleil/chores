import React from 'react';
import styles from './CompletedTaskItem.css';

const CompletedTaskItem = (props) => {
    return (
        <div className={styles.task_list_item}>
            <div className={styles.task_list_item_title}>
                { props.completedTask.title }
            </div>
            <div className={styles.task_list_item_user}>
                performed by { props.completedTask.email }
            </div>
        </div>
    );    
};

export default CompletedTaskItem;