import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
    const activeStyle = {
        color: 'blue',
        fontSize: '2rem',
    };
    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to="/" activeStyle={activeStyle}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeStyle={activeStyle}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profiles" activeStyle={activeStyle}>
                        Profiles
                    </NavLink>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={HistorySample} />
                <Route render={() => <div>Not Found</div>} />
            </Switch>
        </div>
    );
};

export default App;
