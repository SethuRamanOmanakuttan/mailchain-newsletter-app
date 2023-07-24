import React, { useContext, useState } from "react";
import { verifyAdminID } from "../Utils/AdminUtils";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../Context/AdminContext";

export const AdminLoginForm = () => {
  const { setAdminIDVerified } = useContext(AdminContext);
  const navigate = useNavigate();
  const [adminID, setAdminID] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const status = await verifyAdminID(adminID);

    switch (status) {
      case 200:
        setAdminIDVerified(true);
        alert("Admin ID verified successfully!");
        navigate("/AdminPanel");
        break;
      case 403:
        alert("Admin ID not found. Please try again.");
        break;
      default:
        alert("Error occurred during verification. Please try again.");
        break;
    }

    setIsLoading(false);
  };

  return (
    <form
      className="border-3 border-batman bg-opacity-25 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSignIn}
    >
      <div className="mb-4">
        <input
          className=" border-3 bg-transparent border-batman font-poppins shadow text-center  rounded w-full py-2 px-3 text-batman leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="password"
          placeholder="Admin Username"
          value={adminID}
          onChange={(e) => setAdminID(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          className="border-3  border-batman text-xl font-bebas hover:bg-green text-batman p-2 mb-[-4px] rounded-2xl hover:text-white"
          type="submit"
          disabled={isLoading}
        >
          <p className="mb-[-4px]">{isLoading ? "Verifying..." : "Sign In"}</p>
        </button>
      </div>
    </form>
  );
};
