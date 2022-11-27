import React, { ChangeEvent, useState } from 'react';
import todo from '../../../store/todo';
import user from '../../../store/user';
import TodoList from "../../TodoList";
import Filters from "../../UI/Filters/Filters";
import MyModal from '../../UI/Modal/MyModal';
import './Todos.sass';

const Todos : React.FC =  () => {

    const [modalIsActive, setModalIsActive] = useState(false)
    const [inputTodo, setInputTodo] = useState("")

    const modalInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTodo(e.target.value)
    }



    const onSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        const reqBody = {
            "completed": false,
            "text": inputTodo,
            "userId": user.userId
        }
        todo.addTodo(reqBody);
        setModalIsActive(false)
        setInputTodo("")
    }
    

    const onClickAddTodo = () => {
        setModalIsActive(true);
    }

    const onLogout = () => {
        user.setIsAuth(false);
    }


    return (
        <div className="todo-page">
            <div className='control-panel'>
                <input className='btn' type="button" value="Add Todo" onClick={onClickAddTodo} />
                <input className='btn' type="button" value="Exit" onClick={onLogout}/>
            </div>
            <Filters />
            <TodoList/>
            <MyModal active={modalIsActive} setActive={setModalIsActive}>
                <div className='modal'>
                    <input className='modal__input' value={inputTodo} onChange={modalInputHandler}/>
                    <input className='btn' type="submit" onClick={onSubmit} disabled={!inputTodo.trim().length}/>
                </div>
            </MyModal>
        </div>
    );
}

export default Todos;