import React, { Component } from 'react';

class MyComponent extends Component {

    state = {
        input: '',
        array: ['taeyeon', 'chaeyeon']
    };

    handleChange = e =>{
        this.setState({
            input: e.target.value
        });
    };

    handleInsert = () => {
        this.setState({
            input: '',
            array: this.state.array.concat(this.state.input),
        });
    };

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange}/>
                <button onClick={this.handleInsert}>추가</button>
                {
                    this.state.array.map(
                        (text, index)=>(<div key={index}>{text}</div>)
                    )
                }
            </div>
        );
    }
}

export default MyComponent;