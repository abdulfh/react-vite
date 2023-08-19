/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";


export default function UserRoute({user}) {
  return user ? <Outlet /> : <Navigate to="/" />;
}
