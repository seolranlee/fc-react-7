import React, { Component } from 'react';

class App extends Component {
    state = {
        username: '',
        job: '',
    };

    handleChange = e => {
        const { name, value } = e.target;
        // const update = {};
        // update[name] = value; // {username: value} | {job: value}
        // this.setState(update);
        this.setState({
            [name]: value, // Computed property names
        });
    };

    render() {
        const { username, job } = this.state; // 비구조화할당: this.state 객체에서 input을 꺼내온다.
        return (
            <div>
                <input
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                />
                <input name="job" onChange={this.handleChange} value={job} />
                <p>
                    {username}의 직업은 {job}입니다.
                </p>
            </div>
        );
    }
}

export default App;
