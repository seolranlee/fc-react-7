import React from 'react';

const RenderPropsSample = ({ children }) => {
    // 여기서 받아오는 chilren이 함수
    return <div>결과: {children(2)}</div>; // 그래서 children();의 형태로 호출할 수 있는 것.
};

export default RenderPropsSample;
