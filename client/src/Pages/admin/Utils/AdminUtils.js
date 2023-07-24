const sendNewsletter = async (htmlContent) => {
  try {
    const response = await fetch("/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ htmlContent }),
    });
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.log("Error:", error);
  }
};

// mailService.js

const verifyAdminID = async (adminID) => {
  try {
    const response = await fetch("/verifyAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ adminID: adminID }),
    });

    return response.status;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

const getSubscribersList = async () => {
  try {
    const response = await fetch("/subscribers");
    if (response.ok) {
      const data = await response.json();
      return data.data; // Assuming data contains the subscribers list
    }
    throw new Error("Failed to fetch subscribers list");
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
};

export { verifyAdminID, getSubscribersList, sendNewsletter };
