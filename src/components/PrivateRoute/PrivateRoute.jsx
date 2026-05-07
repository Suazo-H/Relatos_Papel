import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth/authContext.jsx";

export const PrivateRoute = ({ children }) => {
  {
    /*Acceder a información de usuario autenticado*/
  }
  const { user } = useContext(AuthContext);
  {
    /*Obtener ruta actual*/
  }
  const location = useLocation();

  {
    /*Redirigir a login si no hay usuario autenticado*/
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};
