import React, { createContext, Component } from 'react';

const ColorContext = createContext({
    // guide에서 클래스 안에 있는 것들과 모양새를 갖춰놓으라고 권장함.=>vscode에서 자동완성이 잘됨
    state: {
        color: 'black',
        subcolor: 'red',
    },
    actions: {
        setColor: () => {},
        setSubColor: () => {},
    },
});

// context를 만들면 그 안에 두가지 컴포넌트가 존재하게 된다.
// ColorContext.Consumer
// ColorContext.Provider    // 최 상단에 주로 위치. 사용하는 부분에만 위치해주는게 좋긴 함.

class ColorProvider extends Component {
    state = {
        color: 'black',
        subcolor: 'red',
    };

    actions = {
        // actions란 객체 안에 우리가 필요한 함수를 모두 넣어준다.
        setColor: color => {
            this.setState({
                color,
            });
        },
        setSubColor: subcolor => {
            this.setState({
                subcolor,
            });
        },
    };

    render() {
        const value = {
            state: this.state,
            actions: this.actions, // 함수가 많아질 것을 대비해서 actions에 통으로 넣어준다.
        };
        return (
            <ColorContext.Provider value={value}>
                {this.props.children}
            </ColorContext.Provider>
        );
    }
}

const { Consumer: ColorConsumer } = ColorContext;
// const ColorConsumer = ColorContext.Consumer; 같은 코드

export default ColorContext; // 내가 만든 color context 를 밖으로 내보낸다.
export { ColorConsumer, ColorProvider }; // 나중에 이 모듈에서 ColorConsumer랑 ColorProvider만 따로 불러올 수 있다.
