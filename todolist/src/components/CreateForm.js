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
                    placeholder="오늘 뭐하지..?"
                    value={input}
                    onChange={this.handleChange}
                />
                <button type="submit">추가</button>
            </form>
        );
    }
}

export default CreateForm;
