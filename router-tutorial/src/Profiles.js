import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';
const Profiles = () => {
    return (
        <div>
            <WithRouterSample />
            <h1>Profiles</h1>
            <h3>유저목록</h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velopeort</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
                <Route
                    path="/profiles"
                    exact
                    render={() => <div>profile을 선택해주세요.</div>}
                />
                {/* react의 서브라우팅 방법. */}
                <Route path="/profiles/:username" component={Profile} />
            </ul>
        </div>
    );
};

export default Profiles;
