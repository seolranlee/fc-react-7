import React from 'react';
import './TodoItem.css';

const TodoItem = ({ id, checked, text, onCheck, onRemove }) => (
    <div
        className={`TodoItem ${checked ? 'active' : ''}`}
        onClick={() => {
            onCheck(id);
        }}
    >
        <div className="check">&#10004;</div>
        <div className="text">{text}</div>
        <div
            className="remove"
            onClick={e => {
                e.stopPropagation(); // remove를 클릭한다고 해서 상위 부모의 onCheck이 호출되지 않도록. 이벤트가 상위로 전파되는 걸 막는다.
                onRemove(id);
            }}
        >
            [지우기]
        </div>
    </div>
);

export default TodoItem;
