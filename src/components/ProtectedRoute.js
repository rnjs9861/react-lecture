import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
