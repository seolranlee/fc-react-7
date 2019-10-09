import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NewsList from './components/NewsList';

class App extends Component {
    state = {
        categories: [
            'business',
            'entertainment',
            'health',
            'science',
            'sports',
            'technology',
        ],
        current: 'all',
    };
    render() {
        return (
            <div>
                <ul>
                    {this.state.categories.map((category, index) => (
                        <li key={index}>
                            <Link to={category}>{category}</Link>
                        </li>
                    ))}
                </ul>

                <Route path="/:category" component={NewsList} />
            </div>
        );
    }
}

export default App;
