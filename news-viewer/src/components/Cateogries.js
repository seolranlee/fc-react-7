import React, { Component } from 'react';

class Cateogries extends Component {
    render() {
        const { category, idx, handleClick } = this.props;
        return (
            <div onClick={() => handleClick(idx)}>
                {idx} {category}
            </div>
        );
    }
}

export default Cateogries;
