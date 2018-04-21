import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskRef } from '../../firebase';
import styles from './AddTask.css';

export class AddTask extends Component { //export added for testing purposes
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
        event.preventDefault();
        taskRef.push({ email: this.props.user.email, title: this.state.title });
        this.setState({ title: '' });
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
                                value={ this.state.title }
                            />
                            <input
                                type='submit'
                                value='submit'
                                onClick={ (event) => { this._addTask(event) } }
                            />
                        </label>
                    </fieldset>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const user = state.user;
    return { user };
};

export default connect(mapStateToProps)(AddTask);