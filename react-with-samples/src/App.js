import React, { Component } from 'react';

class App extends Component {
    state = {
        username: '',
        job: '',
        list: [],
    };

    id = 1;
    // usernameInput = null;
    usernameInput = React.createRef();

    handleChange = e => {
        const { name, value } = e.target;
        // const update = {};
        // update[name] = value; // {username: value} | {job: value}
        // this.setState(update);
        this.setState({
            [name]: value, // Computed property names
        });
    };

    handleInsert = e => {
        e.preventDefault(); // 일반 js에서 발생하는 이벤트를 중지시킨다.
        // form에서 submit이 되어도 새로고침이 되지 않는다.
        const { list, username, job } = this.state;
        this.setState({
            list: list.concat({ id: this.id, username, job }),
            username: '',
            job: '',
        });
        this.id += 1;
        // this.usernameInput.focus();
        console.log(this.usernameInput);
        this.usernameInput.current.focus(); // React.createRef로 만든 ref의 경우 current가 추가된다.
    };

    // handleRemove = id => {
    //     const { list } = this.state;
    //     const index = list.findIndex(item => item.id === id);
    //     const nextList = [...list]; // shallow copy(얕은 복사)
    //     nextList.splice(index, 1);
    //     this.setState({
    //         list: nextList,
    //     });
    // };

    // 좀 더 쉬운 방법
    // filter를 토해서 뫄뫄가 아닌 조건의 애들만 불러옴 > 뫄뫄 삭제와 같은 효과
    handleRemove = id => {
        const { list } = this.state;
        this.setState({
            list: list.filter(item => item.id !== id),
        });
    };

    handleKeyPress = e => {
        if (e.key === 'Enter') this.handleInsert();
    };

    render() {
        const { username, job, list } = this.state; // 비구조화할당: this.state 객체에서 input을 꺼내온다.
        return (
            <div>
                <form onSubmit={this.handleInsert}>
                    <input
                        placeholder="유저명"
                        name="username"
                        onChange={this.handleChange}
                        value={username}
                        ref={this.usernameInput}
                        // ref={ref => (this.usernameInput = ref)} // 여기서 파라미터로 받아오는 ref는 자기 자신의 돔 엘리먼트다. (HTML ELEMENT형태)
                    />
                    <input
                        placeholder="직업"
                        name="job"
                        onChange={this.handleChange}
                        // onKeyPress={this.handleKeyPress}
                        value={job}
                    />
                    <button type="submit">추가</button>
                </form>
                <p>
                    {username}의 직업은 {job}입니다.
                </p>
                <ul>
                    {list.map(item => (
                        <li key={item.id}>
                            {item.id} {item.username} ({item.job})
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={() => this.handleRemove(item.id)}
                            >
                                {/* 파라미터를 넣어줘야 하는 경우 바로 호출해서 넣어주는 게 아니라 함수로 한번 감싸줘야 한다. 그렇게 하지 않으면 render함수가 실행 될 때 곧바로 실행되므로 */}
                                삭제
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
