import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskRef } from '../../firebase';
import styles from './AddTask.css';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    _inputChangeHandler = (event) => {
        this.setState({ title: event.target.value });
    };

    _addTask = (event) => {
        taskRef.push({ email: this.props.email, title: this.state.title });
    };

    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <label>
                            add a task
                            <input
                                type='text'
                                placeholder='new task'
                                onChange={ (event) => { this._inputChangeHandler(event) } }
                            />
                            <button
                                type='button'
                                onClick={ (event) => { this._addTask(event) } }
                            >
                                submit
                            </button>
                        </label>
                    </fieldset>
                </form>
            </div>
        );
    }
}

const getUserEmail = (state) => {
    return { email: state.email };
};

export default connect(getUserEmail)(AddTask);