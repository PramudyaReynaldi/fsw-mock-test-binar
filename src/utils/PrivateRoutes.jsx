/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      navigateTo("/");
    }
  }, []);

  const navigateTo = useNavigate();

  let auth = { token: true };

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
