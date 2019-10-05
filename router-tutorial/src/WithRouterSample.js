import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({ match, history, location }) => {
    console.log(match, history, location);
    return <div></div>;
};

export default withRouter(WithRouterSample);
