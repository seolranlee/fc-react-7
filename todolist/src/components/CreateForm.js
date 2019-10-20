import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
    state = {
        input: '',
    };

    handleChange = e => {
        this.setState({
            input: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.input);
        this.setState({
            input: '',
        });
    };

    render() {
        const { input } = this.state;
        return (
            <form className="CreateForm" onSubmit={this.handleSubmit}>
                <input
                    placeholder="Add to the todo list"
                    value={input}
                    onChange={this.handleChange}
                />
                <button type="submit">Add Item</button>
            </form>
        );
    }
}

export default CreateForm;
