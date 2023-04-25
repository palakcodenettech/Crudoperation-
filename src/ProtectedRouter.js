/* eslint-disable no-unused-expressions */
import React from "react";
import jwt_decode from "jwt-decode";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
const ProtectedRouter = () => {
  const navigate = useNavigate();
  const userType = window.localStorage.getItem("email");
  const token = window.localStorage.getItem("token");
  if (token) {
    let decodedToken = jwt_decode(token);
    console.log("Decoded Token", decodedToken);
    let currentDate = new Date();
    var result = false;
    console.log("calll");
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      console.log("Token expired.");
      window.localStorage.clear();
      navigate("/");
    } else {
      console.log("Valid token");
      result = true;
    }
  } else {
    <Navigate to="/" />;
  }
  userType === null ? true : false;
  token === null ? true : false;
  return userType && token ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRouter;
