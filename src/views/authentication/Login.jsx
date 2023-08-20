import { useState } from "react"
import api from '../../api';

export default function Login() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [errors, setErrors] = useState([]);

    async function login(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        
        await api.post('auth/login', formData).then(response => { 
            localStorage.setItem("user", response.data.access);
            window.location.href = "/orders";
        }).catch(error => {
            setErrors(error.response.data)
        })
    }

    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container py-5">
                <div className="row">
                    <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            <form onSubmit={login}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Email</label>
                                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                                    {errors.email && (<div className="alert alert-danger mt-2">{errors.email[0]}</div>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Password</label>
                                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                                    {errors.password && (<div className="alert alert-danger mt-2">{errors.password[0]}</div>)}
                                </div>

                                <button type="submit" className="btn btn-md btn-primary rounded-sm shadow border-0">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}