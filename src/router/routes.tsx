import Todos from "../components/pages/Todos/Todos";
import Login from "../components/pages/Login/Login";

export const privateRoutes = [
    { path: "/todos", component: <Todos /> },
]

export const publicRoutes = [
    { path: "/login", component: <Login /> }
]