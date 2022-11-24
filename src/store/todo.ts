import {makeAutoObservable} from "mobx";
import {ITodo} from "../types";

export class Todo {
    constructor() {
        makeAutoObservable(this)
    }

    todos: ITodo[] = [];

    fetchTodos() {
        fetch("")
    }

}