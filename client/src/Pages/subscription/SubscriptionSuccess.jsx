import React from "react";
import successImg from "./images/success.png";

export const SuccessPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen mt-[-10px]">
      <div className="flex flex-col w-700 h-100 md:h-500 rounded-xl p-7 justify-center items-center">
        <div className="flex justify-center items-center">
          <img
            src={successImg}
            alt="Transistor Blockchain Crypto"
            className="w-60 h-70 md:w-60 md:h-60 max-w-full max-h-full"
          />
        </div>
        <h2 className=" text-4xl font-bebas text-batman ">
          Thank you for subscribing to the Web3 Newsletter
        </h2>
        <p className="text-sm font-bebas text-batman ">
          We will keep you posted on all the latest updates in the web3
          ecosystem
        </p>
      </div>
    </div>
  );
};
