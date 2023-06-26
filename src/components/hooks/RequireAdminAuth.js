import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAdminAuth from "./useAdminAuth";



export const RequireAdminAuth = ({ allowedRoles }) => {
    const { auth } = useAdminAuth();
    const location = useLocation();
    // console.log(auth);
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.username
                ? <Navigate to={`/Unauthorized`} state={{ from: location }} replace />
                : <Navigate to={`/login`} state={{ from: location }} replace />
    );
}