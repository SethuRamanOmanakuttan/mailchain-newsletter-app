import React from "react";
import errorImg from "./images/error.png";

export const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col w-700 h-100 md:h-500 rounded-xl p-7 justify-center items-center">
        <div className="flex justify-center items-center">
          <img
            src={errorImg}
            alt="Transistor Blockchain Crypto"
            className="w-40 h-30 md:w-60 md:h-50 max-w-full max-h-full"
          />
        </div>
        <h2 className=" text-4xl font-bebas text-batman">
          There seems to be some issue....
        </h2>
        <p className="text-sm font-sans text-gray-600 ">
          Please make sure that you have a{" "}
          <a
            className="text-blue-600"
            href="https://app.mailchain.com/register"
          >
            registered mailchain ID
          </a>
        </p>
      </div>
    </div>
  );
};
