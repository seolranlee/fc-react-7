import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, style, onCheck, onRemove }) => {
    const { id, text, checked } = todo;
    console.log(id);
    return (
        <div className="virtualized-todoitem" style={style}>
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
        </div>
    );
};

export default React.memo(TodoItem); // React.memo를 쓰면 shouldComponentUpdate를 부분적으로 보충할 수 있다.

// class TodoItem extends Component {
//     shouldComponentUpdate(nextProps, nextState) {
//         return nextProps.checked !== this.props.checked;
//     }

//     render() {
//         const { id, checked, text, onCheck, onRemove } = this.props;
//         console.log(id);
//         return (
//             <div
//                 className={`TodoItem ${checked ? 'active' : ''}`}
//                 onClick={() => {
//                     onCheck(id);
//                 }}
//             >
//                 <div className="check">&#10004;</div>
//                 <div className="text">{text}</div>
//                 <div
//                     className="remove"
//                     onClick={e => {
//                         e.stopPropagation(); // remove를 클릭한다고 해서 상위 부모의 onCheck이 호출되지 않도록. 이벤트가 상위로 전파되는 걸 막는다.
//                         onRemove(id);
//                     }}
//                 >
//                     [지우기]
//                 </div>
//             </div>
//         );
//     }
// }
