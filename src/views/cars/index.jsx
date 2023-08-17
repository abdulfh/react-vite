//import useState dan useEffect
import { useState, useEffect } from 'react';

//import api
import api from '../../api';

//import Link
import { Link } from 'react-router-dom';

export default function CarsIndex() {
    const [cars, setCarState] = useState([])

    async function fetchCars() {
        await api.get('cars/list').then(response => {
            setCarState(response.data.cars)
        })
    }

    useEffect(() => {
        fetchCars();
    }, [])

    async function deleteCar(id) {
        await api.delete(`cars/${id}/delete`).then(() => {
            fetchCars();
        })
    }
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <Link to="/cars/create" className="btn btn-md btn-success rounded shadow border-0 mb-3">ADD NEW CAR</Link>
                    <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Car Type</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">Fuel</th>
                                        <th scope="col">Hour Rate</th>
                                        <th scope="col">Day Rate</th>
                                        <th scope="col">Month Rate</th>
                                        <th scope="col" style={{ 'width': '15%' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cars.length > 0 ? cars.map((post, index) => (
                                                <tr key={index}>
                                                    <td className='text-center'>
                                                        <img src={post.image} alt={post.title} width="200" className='rounded' />
                                                    </td>
                                                    <td>{post.name}</td>
                                                    <td>{post.carType}</td>
                                                    <td>{post.rating}</td>
                                                    <td>{post.fuel}</td>
                                                    <td>{post.hourRate}</td>
                                                    <td>{post.dayRate}</td>
                                                    <td>{post.monthRate}</td>
                                                    <td className="text-center">
                                                        <Link to={`/cars/edit/${post.id}`} className="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</Link>
                                                        <button onClick={() => deleteCar(post.id)} className="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
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