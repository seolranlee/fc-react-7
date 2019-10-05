import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const parsed = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    console.log(parsed);
    const detail = parsed.detail === 'true'; // true를 문자열로써 비교해줘야한다.
    return (
        <div>
            <h1>About</h1>
            {detail && <p>detail이 true이다.</p>}
        </div>
    );
};

export default About;
