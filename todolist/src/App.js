import React, { Component } from 'react';
import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';

import './App.css';

const bulkTodos = (() => {
    const array = [];
    for (let i = 0; i < 5000; i++) {
        array.push({
            id: i,
            text: `Todo #${i}`,
            checked: false,
        });
    }
    return array;
})();

class App extends Component {
    // id = 5000;
    // state = {
    //     todos: bulkTodos,
    // };

    // key로 사용될 id의 초기값
    id = 3;
    // state 의 초깃값을 설정합니다.
    state = {
        // 그 초깃값은 배열 형태로 넣어주었고, 내부에 기본 값들을 넣어주었습니다.
        todos: [
            {
                id: 0,
                text: 'Learn Angular.js',
                checked: true,
            },
            {
                id: 1,
                text: 'Learn React.js',
                checked: false,
            },
            {
                id: 2,
                text: 'Learn Vue.js',
                checked: false,
            },
        ],
    };

    handleCreate = text => {
        const todoDate = {
            id: this.id++,
            text,
            checked: false,
        };

        this.setState({
            todos: this.state.todos.concat(todoDate),
        });
    };

    handleCheck = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== id) return todo;
                return {
                    ...todo,
                    checked: !todo.checked,
                };
            }),
        });
    };

    handleRemove = id => {
        this.setState({
            todos: this.state.todos.filter(todo => {
                return todo.id !== id;
            }),
        });
    };

    render() {
        const { todos } = this.state;
        return (
            <div className="App">
                <div className="header">
                    <h1>Todo List</h1>
                </div>
                <CreateForm onSubmit={this.handleCreate} />
                <div className="white-box">
                    <TodoList
                        todos={todos}
                        onCheck={this.handleCheck}
                        onRemove={this.handleRemove}
                    />
                </div>
            </div>
        );
    }
}

export default App;
