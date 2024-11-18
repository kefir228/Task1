import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children, requiredRole }) => {
    const role = useSelector((state) => state.auth.role);
    return role === requiredRole ? children : <Navigate to="/" replace />;
};

