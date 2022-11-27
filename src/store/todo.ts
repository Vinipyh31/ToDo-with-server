import { makeAutoObservable } from "mobx";
import { FilterTypes, ITodo } from './../types/index';
import user from "./user";

class Todo {

    todos: ITodo[] = []
    filter: FilterTypes = "All"

    constructor() {
        makeAutoObservable(this)
    }


    setFilter(filter: FilterTypes) {
        this.filter = filter;
        this.fetchTodos();
    }

    setTodos(newTodos: ITodo[]) {
        this.todos = newTodos
    }

    async fetchTodos() {
        const res = await fetch(`http://localhost:5000/todos/${user.userId}?filter=${this.filter.toLowerCase()}`)
        const resJson: ITodo[] = await res.json()
        this.setTodos(resJson)
    }


    async addTodo(reqBody: Object) {
        await fetch(" http://localhost:5000/todos", {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.fetchTodos()
    }

    async changeCompleted(id: number, value: boolean) {
        await fetch("http://localhost:5000/todos/" + id, {
            method: "PATCH",
            body: JSON.stringify({ completed: value }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.fetchTodos()
    }
    
    async removeTodo(id: number) {
        await fetch("http://localhost:5000/todos/" + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.fetchTodos()
    }

}

export default new Todo();