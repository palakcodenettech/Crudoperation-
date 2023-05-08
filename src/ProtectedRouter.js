/* eslint-disable no-unused-expressions */
import React from "react";
import jwt_decode from "jwt-decode";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import  secureLocalStorage  from  "react-secure-storage";
const ProtectedRouter = () => {
  const navigate = useNavigate();
  const userType =secureLocalStorage.getItem("email");
  const token = secureLocalStorage.getItem("token");
  if (token) {
    let decodedToken = jwt_decode(token);
    let currentDate = new Date();
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      window.localStorage.clear();
      navigate("/");
    } 
  } else {
    <Navigate to="/" />;
  }
  userType === null ? true : false;
  token === null ? true : false;
  return userType && token ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRouter;
