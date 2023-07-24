import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../admin/Context/AdminContext";
import { handleSubscriptionRequest } from "../Utils/SubscriptionUtil";

export const SubscriptionForm = ({ action, setAction }) => {
  console.log("action", action);
  const [mailchainID, setMailchainID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const navigate = useNavigate();
  const { fetchSubscriptionList } = useContext(AdminContext);

  const handleAction = async () => {
    const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.mailchain\.com$/i;
    if (!emailRegex.test(mailchainID)) {
      setIsInvalidEmail(true);
      return;
    }

    setIsInvalidEmail(false);
    setIsLoading(true);

    const status = await handleSubscriptionRequest(action, mailchainID);
    setIsLoading(false);

    switch (status) {
      case 200:
        if (action === "unsubscribe") {
          alert("Unsubscribed !");
          setAction("sendInitialMail"); // Reset the form action to subscribe
          return;
        }
        await fetchSubscriptionList(); // Fetch the subscription list when the user has unsubscribed
        navigate("/SuccessPage");
        break;
      case 409:
        navigate("/DuplicatePage");
        break;
      case 404:
        alert("It seems you haven't subscribed yet");
        setAction("sendInitialMail"); // Reset the form action to subscribe
        return;
      default:
        navigate("/ErrorPage");
    }

    setAction("sendInitialMail"); // Reset the form action to subscribe
  };

  return (
    <form
      id="subscription-form"
      className="flex flex-col items-center justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleAction();
      }}
    >
      <div className="relative mb-2 mt-2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <svg
            className="w-5 h-5 text-batman dark:text-gray-400 mt-1 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
        </div>
        <input
          type="text"
          id="input-group-1"
          className={` bg-red-50  text-slate-800 text-rubik font-normal rounded w-full border-3 border-batman pl-10 p-2.5 ${
            isInvalidEmail ? "border-red-600" : "border-gray-300"
          } dark:border-red-600`}
          placeholder="name@mailchain.com"
          onChange={(e) => {
            setMailchainID(e.target.value);
          }}
        />
      </div>
      <button
        className=" border-3 mt-3 mb-[-2px] border-batman hover:bg-batman text-batman hover:text-white text-lg font-bold py-1 p-6 rounded-2xl"
        form="subscription-form"
        disabled={isLoading}
      >
        {isLoading
          ? "HOLD ON..."
          : action === "sendInitialMail"
          ? "SUBSCRIBE"
          : "UNSUBSCRIBE"}
      </button>
      {isInvalidEmail && (
        <p className="text-red-600 text-xs text-center mt-2">
          Invalid mailchain ID format! <br></br>
          Please use the following format: name@mailchain.com
        </p>
      )}
    </form>
  );
};
