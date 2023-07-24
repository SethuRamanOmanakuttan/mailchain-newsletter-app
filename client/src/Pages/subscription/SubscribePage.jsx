import React, { useState } from "react";
import { SubscriptionForm } from "./Components/SubscriptionForm";
import headerImg from "./images/header.png";
import unsubImg from "./images/unsub.png";

export const SubscribePage = () => {
  const [state, setState] = useState({
    action: "sendInitialMail",
    imgSrc: headerImg,
  });

  const handleUnsubscribeClick = () => {
    setState((prevState) => {
      if (prevState.action === "sendInitialMail") {
        return {
          action: "unsubscribe",
          imgSrc: unsubImg, // No image in the "unsubscribe" state
        };
      } else {
        return {
          action: "sendInitialMail",
          imgSrc: headerImg,
        };
      }
    });
  };

  const setAction = (newAction) => {
    setState((prevState) => {
      return {
        ...prevState,
        action: newAction,
        imgSrc: newAction === "sendInitialMail" ? headerImg : unsubImg,
      };
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1
        className={`tracking-wide font-medium text-center mt-[-30px] mb-6 
          ${
            state.action === "sendInitialMail"
              ? "text-6xl font-bebas text-batman"
              : "text-4xl font-bebas text-batman"
          }`}
      >
        {state.action === "sendInitialMail"
          ? "The Complete Web3 Newsletter."
          : "Sorry to see you leave !"}
      </h1>
      <div className="flex flex-col border-4 border-batman w-700 h-100 md:h-500 rounded p-7 justify-center items-center">
        {state.imgSrc && ( // Image is only shown if imgSrc is not null
          <div className="flex justify-center items-center">
            <img
              src={state.imgSrc}
              alt="Transistor Blockchain Crypto"
              className="w-60 h-50 md:w-60 md:h-50 max-w-full max-h-full"
            />
          </div>
        )}
        <SubscriptionForm action={state.action} setAction={setAction} />
      </div>
      <div className="flex w-800 justify-between p-2">
        {state.action === "sendInitialMail" && (
          <a
            className="text-xs mr-[100px] font-medium text-batman  hover:underline"
            href="https://app.mailchain.com/register"
          >
            Don't have a registered mailchain ID?
          </a>
        )}
        <a
          className="text-xs font-medium text-batman dark:text-slate-300 hover:underline"
          onClick={handleUnsubscribeClick}
        >
          {state.action === "sendInitialMail" ? "Unsubscribe" : "Subscribe"}
        </a>
      </div>
    </div>
  );
};
