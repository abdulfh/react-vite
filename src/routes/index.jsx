//import react router dom
import { Routes, Route } from "react-router-dom";


import Home from '../views/home.jsx';

//import view cars index
import CarsIndex from '../views/cars/index.jsx';

//import view Cars create
import CarsCreate from '../views/cars/create.jsx';

//import view Cars edit
import CarsEdit from '../views/cars/edit.jsx';

export default function RoutesIndex() {
    return (
        <Routes>

            {/* route "/" */}
            <Route path="/" element={<Home />} />

            {/* route "/cars" */}
            <Route path="/cars" element={<CarsIndex />} />

            {/* route "/cars/create" */}
            <Route path="/cars/create" element={<CarsCreate />} />

            {/* route "/cars/edit/:id" */}
            <Route path="/cars/edit/:id" element={<CarsEdit />} />

        </Routes>
    )
}
