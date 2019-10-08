import React, { Component } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

class App extends Component {
    render() {
        return <NewsList />;
    }
}

export default App;
