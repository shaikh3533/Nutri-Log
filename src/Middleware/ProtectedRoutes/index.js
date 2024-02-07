import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../Auth";


const index = () => {
  return Auth.isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};
export default index;