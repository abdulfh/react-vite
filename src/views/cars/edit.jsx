import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from '../../api';
import authHeader from '../../services/auth-header';


export default function CarsEdit() {
    //define state
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [carType, setCarType] = useState('');
    const [rating, setRating] = useState('');
    const [fuel, setFuel] = useState('');
    const [hourRate, setHourRate] = useState('');
    const [dayRate, setDayRate] = useState('');
    const [monthRate, setMonthRate] = useState('');

    //state validation
    const [errors, setErrors] = useState([]);

    //useNavigate
    const navigate = useNavigate();

    //destruct ID
    const { id } = useParams();

    //method fetchDetailPost
    async function fetchDetailPost() {

        //fetch data
        await api.get(`/cars/${id}`, {headers: authHeader()})
            .then(response => {
                const responseData = response.data
                //assign to state
                setImage(responseData.image)
                setName(responseData.name)
                setCarType(responseData.carType)
                setRating(responseData.rating)
                setFuel(responseData.fuel)
                setHourRate(responseData.hourRate)
                setDayRate(responseData.dayRate)
                setMonthRate(responseData.monthRate)
            })
    }

    useEffect(() => {

        //call method "fetchDetailPost"
        fetchDetailPost();

    }, []);

    const addCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");
    const removeComma = (num) => num.toString().replace(/,/g, "");
    
    async function updatePost(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('carType', carType);
        formData.append('rating', rating);
        formData.append('fuel', fuel);
        formData.append('hourRate', removeComma(hourRate));
        formData.append('dayRate', removeComma(dayRate));
        formData.append('monthRate', removeComma(monthRate));

        await api.put(`cars/${id}/update`, formData, {headers:authHeader()}).then(() => {
            navigate('/cars')
        }).catch(error => {
            setErrors(error.response.data)
        })
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            <form onSubmit={updatePost}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Image</label>
                                    <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image" />
                                    {errors.image && (<div className="alert alert-danger mt-2">{errors.image[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Name</label>
                                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                                    {errors.name && (<div className="alert alert-danger mt-2">{errors.name[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Car Type</label>
                                    <input type="text" className="form-control" value={carType} onChange={(e) => setCarType(e.target.value)} placeholder="Type" />
                                    {errors.carType && (<div className="alert alert-danger mt-2">{errors.carType[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Rating</label>
                                    <input type="number" min={0} className="form-control" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" />
                                    {errors.rating && (<div className="alert alert-danger mt-2">{errors.rating[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Fuel</label>
                                    <input type="text" className="form-control" value={fuel} onChange={(e) => setFuel(e.target.value)} placeholder="Fuel" />
                                    {errors.fuel && (<div className="alert alert-danger mt-2">{errors.fuel[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Hour Rate</label>
                                    <input type="text" className="form-control" value={addCommas(removeNonNumeric(hourRate))} onChange={(e) => setHourRate(addCommas(removeNonNumeric(e.target.value)))} placeholder="Hour Rate" />
                                    {errors.hourRate && (<div className="alert alert-danger mt-2">{errors.hourRate[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Day Rate</label>
                                    <input type="text" className="form-control" value={addCommas(removeNonNumeric(dayRate))} onChange={(e) => setDayRate(addCommas(removeNonNumeric(e.target.value)))} placeholder="Day Rate" />
                                    {errors.dayRate && (<div className="alert alert-danger mt-2">{errors.dayRate[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Month Rate</label>
                                    <input type="text" className="form-control" value={addCommas(removeNonNumeric(monthRate))} onChange={(e) => setMonthRate(addCommas(removeNonNumeric(e.target.value)))} placeholder="Month Rate" />
                                    {errors.monthRate && (<div className="alert alert-danger mt-2">{errors.monthRate[0]}</div>)}
                                </div>

                                <button type="submit" className="btn btn-md btn-primary rounded-sm shadow border-0">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}