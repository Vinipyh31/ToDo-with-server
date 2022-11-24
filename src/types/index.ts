
export interface TodoItemProps {
    todo: ITodo;
}

export interface IRegisterResponse {
    accessToken: string;
    user: {
        email: string;
        id: number;
    }
}

export interface ITodo  {
    id: number;
    title: string;
    completed: boolean;
    user_id: number;
}