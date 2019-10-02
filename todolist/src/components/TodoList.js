import React, { Fragment, Component } from 'react';
import TodoItem from './TodoItem';
import { List } from 'react-virtualized';

class TodoList extends Component {
    renderRow = ({ index, key, parent, style }) => {
        const { onCheck, onRemove, todos } = this.props;
        const todo = todos[index];
        return (
            <TodoItem
                todo={todo}
                onCheck={onCheck}
                onRemove={onRemove}
                style={style}
                key={key}
            />
        );
    };
    render() {
        const { todos } = this.props;
        return (
            <List
                width={600}
                height={364}
                rowHeight={62}
                rowCount={todos.length}
                rowRenderer={this.renderRow}
                list={todos}
                style={{outline: 'none'}}
            />
        );
    }
}

export default TodoList;
