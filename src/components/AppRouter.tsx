import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import User from "../store/user";
import {observer} from "mobx-react-lite";

const AppRouter = observer( () => {

    return (
            User.isAuth ?
                <Routes>
                    {privateRoutes.map((route) =>
                        <Route key={route.path} path={route.path} element={route.component}/>
                    )}
                    <Route
                        path="*"
                        element={<Navigate to="/todos" replace/>}
                    />
                </Routes>
                : <Routes>
                    {publicRoutes.map((route) =>
                        <Route key={route.path} path={route.path} element={route.component}/>
                    )}
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace/>}
                    />
                </Routes>
    );
})

export default AppRouter;