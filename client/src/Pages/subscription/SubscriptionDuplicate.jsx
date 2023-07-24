import React from "react";
import duplicateImg from "./images/duplicate.png";

export const DuplicatePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col  w-700 h-100 md:h-500 rounded-xl p-7 justify-center items-center">
        <div className="flex justify-center items-center">
          <img
            src={duplicateImg}
            alt="Transistor Blockchain Crypto"
            className="w-40 h-30 md:w-60 md:h-50 max-w-full max-h-full"
          />
        </div>
        <h2 className=" text-4xl font-bebas text-batman ">
          Thank you ... again .. but we got you covered !
          <br />
        </h2>
        <p className="text-sm font-poppins text-gray-600  ">
          We will be sending weekly updates to your inbox
        </p>
      </div>
    </div>
  );
};
