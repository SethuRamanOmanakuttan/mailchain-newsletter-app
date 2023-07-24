import React, { useContext } from "react";
import { AdminContext } from "../Context/AdminContext";
import { EditorForm } from "./EditorForm";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

export const AdminDashboard = () => {
  const { subscriptionList } = useContext(AdminContext);
  const subscriberNumber = subscriptionList.length;
  const navigate = useNavigate(); // new

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col mt-16 w-3/4 h-[75vh bg-opacity-50">
        <div className="flex items-center justify-between w-full">
          <div className="w-24 h-20 flex flex-col justify-between m-3 text-center border-3 rounded-xl border-batman">
            <div className="mt-1 p1 w-full ">
              <h1 className="font-bebas text-5xl mb-[-5px] text-batman">
                {subscriberNumber}
              </h1>
              <h1 className="font-bebas text-xl text-batman">Subscribers</h1>
            </div>
          </div>
          <button
            className="w-14 h-14 hover:bg-[#e93535] flex flex-col justify-between items-center  m-3 text-center border-3 border-batman rounded-4xl border-slate-950 "
            onClick={() => navigate("/Admin")}
          >
            <MdOutlineLogout
              className=" m-auto"
              color="#3d3d3d"
              size={"30px"}
            />
            <div className="mt-[-1px] p1 w-full rounded-3xl "></div>
          </button>
        </div>
        <h1 className="font-bebas text-4xl text-batman  text-center">
          Newsletter Composer
        </h1>
        <EditorForm subscribers={subscriberNumber} />
      </div>
    </div>
  );
};
