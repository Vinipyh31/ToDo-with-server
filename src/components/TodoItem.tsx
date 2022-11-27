import { FC } from 'react';
import todo from '../store/todo';
import { TodoItemProps } from "../types";


const TodoItem: FC<TodoItemProps> = ({ todoItem }) => {

    const onChange = () => {
        todo.changeCompleted(todoItem.id, !todoItem.completed)
    }

    const onDelete = () => {
        todo.removeTodo(todoItem.id);
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={todoItem.completed} onChange={onChange} />
            <h4 style={{ textDecoration: todoItem.completed ? "line-through" : "none" }} >
                {todoItem.text}
            </h4>
            <svg onClick={onDelete}
                width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" /></g></g></svg>
        </div>
    );
};

export default TodoItem;