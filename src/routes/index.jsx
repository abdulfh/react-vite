//import react router dom
import { Routes, Route } from "react-router-dom";


import Auth from '../views/auth.jsx';

//import view cars index
import CarsIndex from '../views/cars/index.jsx';

//import view Cars create
import CarsCreate from '../views/cars/create.jsx';

//import view Cars edit
import CarsEdit from '../views/cars/edit.jsx';

//import view Orders index
import OrdersIndex from '../views/orders/index.jsx';

//import view Orders create
import OrdersCreate from '../views/orders/create.jsx';

//import view Orders edit
import OrdersEdit from '../views/orders/edit.jsx';

export default function RoutesIndex() {
    return (
        <Routes>

            {/* route "/" */}
            <Route path="/" element={<Auth />} />

            {/* route "/cars" */}
            <Route path="/cars" element={<CarsIndex />} />

            {/* route "/cars/create" */}
            <Route path="/cars/create" element={<CarsCreate />} />

            {/* route "/cars/edit/:id" */}
            <Route path="/cars/edit/:id" element={<CarsEdit />} />

            {/* route "/orders" */}
            <Route path="/orders" element={<OrdersIndex />} />

            {/* route "/orders/create" */}
            <Route path="/orders/create" element={<OrdersCreate />} />

            {/* route "/orders/edit/:id" */}
            <Route path="/orders/edit/:id" element={<OrdersEdit />} />

        </Routes>
    )
}
