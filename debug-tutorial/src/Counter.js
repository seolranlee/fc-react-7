// file: src/Counter.js
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
    };
    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };
    render() {
        const a = 1;
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleClick}>PLUS</button>
            </div>
        );
    }
}

export default Counter;
