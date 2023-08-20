import { Route, Routes } from "react-router-dom";

import { AuthData } from '../context/AuthContext';

import {nav} from './navigation';

import AdminRoute from "../guard/AdminRoute";
import UserRoute from "../guard/UserRoute";

export default function RoutesIndex() {
    const { user } = AuthData()
    return (
        <Routes>
            {
                nav.map((route, index) => {
                    if (!user && !route.isPrivate) {
                        return <Route key={index} path={route.path} element={route.element}></Route>
                    } else if (user && route.isPrivate && (route.isAdmin || route.isUser) && user.is_admin) {
                        return <Route exact key={index} element={<AdminRoute user={user}/>}><Route path={route.path} element={route.element}></Route></Route>
                    } else if (user && route.isPrivate && route.isUser) {
                        return <Route exact key={index} element={<UserRoute user={user}/>}><Route path={route.path} element={route.element}></Route></Route>
                    } else {
                        return false
                    }
                })
            }
        </Routes>
    )
}
