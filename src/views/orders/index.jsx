import { useState, useEffect } from "react"

import api from "../../api"

import authHeader from '../../services/auth-header';

import { Link } from 'react-router-dom';

export default function OrdersIndex() {
    const [orders, setOrderState] = useState([])

    async function fetchOrders() {
        await api.get('orders/list', {headers:authHeader()}).then(response => {
            setOrderState(response.data.orders)
        })
    }

    useEffect(() => {
        fetchOrders();
    }, [])

    async function deleteOrders(id) {
        await api.delete(`orders/${id}/delete`, {headers: authHeader()}).then(() => {
            fetchOrders();
        })
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <Link to="/orders/create" className="btn btn-md btn-success rounded shadow border-0 mb-3">ADD NEW ORDER</Link>
                    <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th scope="col">Pickup Location</th>
                                        <th scope="col">Drop Off Location</th>
                                        <th scope="col">Pickup Date</th>
                                        <th scope="col">Drop Off Date</th>
                                        <th scope="col">Pickup Time</th>
                                        <th scope="col">Car ID</th>
                                        <th scope="col">User ID</th>
                                        <th scope="col" style={{ 'width': '15%' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.length > 0 ? orders.map((post, index) => (
                                            <tr key={index}>
                                                <td>{post.pickUpLoc}</td>
                                                <td>{post.dropOffLoc}</td>
                                                <td>{post.pickUpDate}</td>
                                                <td>{post.dropOffDate}</td>
                                                <td>{post.pickUpTime}</td>
                                                <td>{post.carId.name}</td>
                                                <td>{post.userId}</td>
                                                <td className="text-center">
                                                    <Link to={`/orders/edit/${post.id}`} className="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</Link>
                                                    <button onClick={() => deleteOrders(post.id)} className="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                                                </td>
                                            </tr>
                                        ))

                                            : <tr>
                                                <td colSpan="9" className="text-center">
                                                    <div className="alert alert-danger mb-0">
                                                        Data Belum Tersedia!
                                                    </div>
                                                </td>
                                            </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
