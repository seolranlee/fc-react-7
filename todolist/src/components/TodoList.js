import React, { Fragment } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onCheck, onRemove }) => {
    // 비구조화 할당
    // Fragment 는, JSX 를 감싸고 싶은데 따로 DOM 엘리먼트를 만들고싶지 않을 때 사용합니다.
    return todos.map(todo => (
        // 배열에 key 가 설정되어있다면
        // 배열을 그대로 렌더링 할 수도 있습니다 - 리액트 16 기준
        <TodoItem
            key={todo.id}
            onCheck={onCheck}
            onRemove={onRemove}
            // id={todo.id}
            // text={todo.text}
            // checked={todo.checked}

            {...todo} // 스프레드 문법을 쓰면 객체에 있는 하나하나의 값이 컴포넌트의 프롭스로 전달이 된다.
        />
    ));
};

export default TodoList;
