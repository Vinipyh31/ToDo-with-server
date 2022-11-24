import Todos from "../components/pages/Todos";
import Login from "../components/pages/Login";

export const privateRoutes = [
    { path: "/todos", component: <Todos /> },
]

export const publicRoutes = [
    { path: "/login", component: <Login /> }
]