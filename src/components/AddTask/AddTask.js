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
        event.preventDefault();
        taskRef.push({ email: this.props.user.email, title: this.state.title });
        this.setState({ title: '' });
    };

    render() {
        return (
            <div>
                <form>
                    <label htmlFor='new_task'>add a task:</label>
                        <input type='text'
                            id='new_task'
                            placeholder='new task'
                            onChange={ (event) => { this._inputChangeHandler(event) } }
                            value={ this.state.title }
                        />
                        <input
                            type='submit'
                            value='submit'
                            onClick={ (event) => { this._addTask(event) } }
                        />
                    
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