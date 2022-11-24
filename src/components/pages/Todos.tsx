import React from 'react';
import TodoList from "../TodoList";
import Filters from "../UI/Filters/Filters";
import Search from "../UI/Search/Search";

const Todos = () => {
    return (
        <div>
            <input type="button" value="Добавить Todo"/>
            <Filters />
            <Search />
            <TodoList/>
        </div>
    );
};

export default Todos;