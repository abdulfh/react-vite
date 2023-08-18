import CarsIndex from "../views/cars";
import CarsCreate from "../views/cars/create";
import CarsEdit from "../views/cars/edit";
import OrdersIndex from "../views/orders";
import OrdersCreate from "../views/orders/create";
import OrdersEdit from '../views/orders/edit.jsx';

export const nav = [
    { path: "/cars", name: "Cars", isMenu: true, element: <CarsIndex />, isPrivate: true, isAdmin: true, isUser: false },
    { path: "/cars/create", name: "Cars Create", isMenu: false, element: <CarsCreate />, isPrivate: true, isAdmin: true, isUser: false },
    { path: "/cars/edit/:id", name: "Cars Edit", isMenu: false, element: <CarsEdit />, isPrivate: true, isAdmin: true, isUser: false },
    { path: "/orders", name: "Orders", isMenu: true, element: <OrdersIndex />, isPrivate: true, isAdmin: true, isUser: true },
    { path: "/orders/create", name: "Orders Create", isMenu: false, element: <OrdersCreate />, isPrivate: true, isAdmin: true, isUser: true },
    { path: "/orders/edit/:id", name: "Orders Edit", isMenu: false, element: <OrdersEdit />, isPrivate: true, isAdmin: true, isUser: true },
]