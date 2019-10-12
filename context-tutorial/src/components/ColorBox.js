import React from 'react';
import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
    return (
        // Context.Consumer는 RenderProps 컨셉을 기반으로 한다.
        <ColorConsumer>
            {(
                { state: { color, subcolor } }, // 비구조화 할당
            ) => (
                <>
                    <div
                        style={{
                            backgroundColor: color,
                            width: '64px',
                            height: '64px',
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: subcolor,
                            width: '32px',
                            height: '32px',
                        }}
                    ></div>
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;
