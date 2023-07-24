import React from "react";
import { AdminLoginForm } from "./Components/AdminLoginForm";
import { LiaUserTieSolid } from "react-icons/lia";

export const AdminLogin = () => {
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="w-full max-w-xs mt-[-65px]">
        <div className="flex flex-col items-center justify-center text-center mt-3 mb-3">
          <LiaUserTieSolid size={"4em"} color="#3d3d3d" />
          <h1 className="font-bebas text-4xl text-batman">ADMIN PORTAL</h1>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  );
};
