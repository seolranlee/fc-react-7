import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NewsList from './components/NewsList';



class App extends Component {
    
    render() {
        return (
            <div>
                <Route path="/" exact component={NewsList} />
                <Route path="/:category" component={NewsList} />
            </div>
        );
    }
}

export default App;
