import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        return (
            <div>
                <strong>
                    {this.props.task.title}
                </strong>
                &nbsp;
                <span>
                    submitted by <em>{this.props.task.email}</em>
                </span>
            </div>
        );
    }
}

export default TaskItem;