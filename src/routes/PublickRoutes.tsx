
import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import {useUser} from "../hooks/useUser";

const PublicRoutes = () => {
  const location = useLocation();
  const { checkUserAvailability } = useUser();

  const user = checkUserAvailability()
  if ( user ) {
    return  <Outlet />
  }
  return <Navigate to="/login" state={{ from: location }} replace />
};

export default PublicRoutes;