import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import todo from '../store/todo';
import TodoItem from './TodoItem';

const TodoList = observer(() => {

    useEffect(() => {
        todo.fetchTodos()
    }, [])

    return (
        <div className="todo-list">
            {todo.todos.map(( todo) => <TodoItem key={todo.id} todoItem={todo}/>)}
        </div>
    );
})

export default TodoList;