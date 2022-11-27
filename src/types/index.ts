
export type FilterTypes = "All" | "Done" | "Undone"

export interface TodoItemProps {
    todoItem: ITodo;
}

export interface MyModalProps {
    active: boolean;
    setActive: (isActive: boolean) => void;
    children: JSX.Element;
}

export interface IRegisterResponse {
    accessToken: string;
    user: {
        email: string;
        id: number;
    }
}

export interface ITodo {
    text: string;
    completed: boolean;
    userId: number,
    id: number;
}