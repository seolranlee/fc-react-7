import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({ match, history, location }) => {
    console.log(match, history, location);
    return <div></div>;
};

export default withRouter(WithRouterSample); // 라우트가 아닌 컴포넌트가 라우트 관련 props를 받아와야 할때 withRouter를 사용
