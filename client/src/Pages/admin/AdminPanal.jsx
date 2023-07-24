import React, { useContext } from "react";
import { AdminContext } from "./Context/AdminContext";
import { AdminDashboard } from "./Components/AdminDashboard";
import { useNavigate } from "react-router-dom";

export const AdminPanel = () => {
  const navigate = useNavigate();
  const { adminIDVerified } = useContext(AdminContext);
  return adminIDVerified ? (
    <div>
      <AdminDashboard />
    </div>
  ) : (
    navigate("/Admin")
  );
};
