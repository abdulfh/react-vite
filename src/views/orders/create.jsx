import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from '../../api';


export default function OrdersCreate() {
    //define state
    const [pickUpLoc, setPickUpLoc] = useState('');
    const [dropOffLoc, setDropOffLoc] = useState('');
    const [pickUpDate, setPickupDate] = useState('');
    const [dropOffDate, setDropOffDate] = useState('');
    const [pickUpTime, setPickUpTime] = useState('');
    const [carId, setCarId] = useState('');

    //state validation
    const [errors, setErrors] = useState([]);

    //useNavigate
    const navigate = useNavigate();

    async function storePost(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('pickUpLoc', pickUpLoc);
        formData.append('dropOffLoc', dropOffLoc);
        formData.append('pickUpDate', pickUpDate);
        formData.append('dropOffDate', dropOffDate);
        formData.append('pickUpTime', pickUpTime);
        formData.append('carId', carId);
        
        await api.post('orders/store', formData).then(() => {
            navigate('/orders')
        }).catch(error => {
            console.log(error);
            setErrors(error.response.data)
        })
    }



    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            <form onSubmit={storePost}>
                            
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Pick Up Location</label>
                                    <input type="text" className="form-control" onChange={(e) => setPickUpLoc(e.target.value)} placeholder="Pick Up Location"/>
                                    {errors.pickUpLoc && (<div className="alert alert-danger mt-2">{errors.pickUpLoc[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Drop Off Location</label>
                                    <input type="text" className="form-control" onChange={(e) => setDropOffLoc(e.target.value)} placeholder="Drop Off Location"/>
                                    {errors.dropOffLoc && (<div className="alert alert-danger mt-2">{errors.dropOffLoc[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Pick Up Date</label>
                                    <input type="date" className="form-control" onChange={(e) => setPickupDate(e.target.value)} placeholder="Pickup Date"/>
                                    {errors.pickUpDate && (<div className="alert alert-danger mt-2">{errors.pickUpDate[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Drop Off Date</label>
                                    <input type="date" min={0} className="form-control" onChange={(e) => setDropOffDate(e.target.value)} placeholder="Drop Off Date"/>
                                    {errors.dropOffDate && (<div className="alert alert-danger mt-2">{errors.dropOffDate[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Pick Up Time</label>
                                    <input type="time" className="form-control" onChange={(e) => setPickUpTime(e.target.value)} placeholder="Pickup Time"/>
                                    {errors.pickUpTime && (<div className="alert alert-danger mt-2">{errors.pickUpTime[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Cars</label>
                                    <input type="number" min={0} className="form-control" onChange={(e) => setCarId(e.target.value)} placeholder="Cars"/>
                                    {errors.carId && (<div className="alert alert-danger mt-2">{errors.carId[0]}</div>)}
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