import { createContext, useState } from "react";

export const SubscriptionContext = createContext(null);

export const SubscriptionContextProvider = (props) => {
  const [subscriptions, setSubscriptions] = useState([]);

  const addSubscription = (subscription) => {
    setSubscriptions((prevSubscriptions) => [
      ...prevSubscriptions,
      subscription,
    ]);
  };

  const removeSubscription = (address) => {
    setSubscriptions((prevSubscriptions) =>
      prevSubscriptions.filter(
        (subscription) => subscription.address !== address
      )
    );
  };

  const contextValue = {
    subscriptions,
    addSubscription,
    removeSubscription,
  };

  return (
    <SubscriptionContext.Provider value={contextValue}>
      {props.children}
    </SubscriptionContext.Provider>
  );
};
