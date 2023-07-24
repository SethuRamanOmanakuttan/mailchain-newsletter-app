const handleSubscriptionRequest = async (action, mailchainID) => {
  try {
    const response = await fetch(`/${action}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _userAddress: mailchainID }),
    });
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.log("Error:", error);
  }
};

module.exports = {
  handleSubscriptionRequest,
};
