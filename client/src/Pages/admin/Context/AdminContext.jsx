import React, { createContext, useState, useEffect } from "react";
import { getSubscribersList } from "../Utils/AdminUtils";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [adminIDVerified, setAdminIDVerified] = useState(false);
  const [subscriptionList, setSubscriptionList] = useState([]);

  const fetchSubscriptionList = async () => {
    const list = await getSubscribersList();
    setSubscriptionList(list);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchSubscriptionList();
    }, 6000); // Run fetchSubscriptionList every 2 seconds

    return () => {
      clearInterval(interval); // This is important to clear the interval when the component unmounts
    };
  }, []); // empty dependency array makes this useEffect run only once on mount, but inside it we have a setInterval that runs every 2 seconds

  return (
    <AdminContext.Provider
      value={{
        adminIDVerified,
        setAdminIDVerified,
        subscriptionList,
        fetchSubscriptionList,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
