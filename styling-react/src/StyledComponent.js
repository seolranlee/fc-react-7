import React from 'react';
import styled, { css } from 'styled-components';

const MyCompoenent = styled.div`
    font-size: 2rem;
    color: #fff;
    margin-left: 10px;
`;

const MyInput = styled('input')`
    background-color: #efefef;
`;

const Box = styled.div`
    background: ${props => props.color || 'blue'};
    border: ${props => props.border || '1px solid red'};
    padding: 1rem;
    display: flex;
    /* 기본적으로는 1024px 에 가운데 정렬을 하고
    가로 크기가 작아짐에 따라 사이즈를 줄이고
    768px 미만으로 되면 꽉 채웁니다 */
    width: 1024px;
    margin: 0 auto;
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    /* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    /* 다음 코드는 props의 inverted 값이 true 일 때 특정 스타일을 부여해줍니다. */
    ${props =>
        props.inverted &&
        css`
            background: none;
            border: 2px solid white;
            color: white;
            &:hover {
                background: ${props => props.hoverBg || 'white'};
                color: black;
            }
        `};
    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => (
    <Box color="black" border="2px solid blue">
        <Button>안녕하세요</Button>
        <Button inverted={true} hoverBg={'purple'}>
            테두리만
        </Button>
        {/* <MyCompoenent>test</MyCompoenent> */}
        {/* <MyInput placeholder="MyInput" /> */}
    </Box>
);

export default StyledComponent;
