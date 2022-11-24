import React, {FC} from 'react';
import {TodoItemProps} from "../types";


const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={todo.completed}/>
            <h3>{todo.title}</h3>
        </div>
    );
};

export default TodoItem;