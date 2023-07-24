// Include required modules
const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config("../.env");

// Import custom modules
const { sendMail } = require("./src/mailManager");
const { verifyID } = require("./src/adminManager");
const {
  getSubscriptions,
  updateSubscriptions,
} = require("./src/subscriptionManager");

// Middleware setup
app.use(morgan("combined")); // Use morgan for logging
app.use(express.json()); // Parse JSON bodies in the request

// Route to send initial subscription email
app.post("/sendInitialMail", async (req, res) => {
  console.log(`Received a request to send a mail to: ${req.body._userAddress}`);

  let subscriptions = getSubscriptions();

  if (subscriptions.includes(req.body._userAddress)) {
    console.log(
      `Email ID ${req.body._userAddress} already exists in the subscription list.`
    );
    return res.status(409).json({
      success: false,
      message: "Email ID already exists in the subscription list.",
    });
  }

  const result = await sendMail(req.body._userAddress, "subscribe");

  if (!result.success) {
    console.error("Error sending mail:", result.error);
    return res.status(500).json(result);
  }

  subscriptions.push(req.body._userAddress);
  updateSubscriptions(subscriptions);

  console.log(
    `Mail sent successfully. Email ID ${req.body._userAddress} added to the subscription list.`
  );

  res.status(200).json({
    success: true,
    data: result.data,
    message: "Mail sent successfully. Email ID added to the subscription list.",
  });
});

// Route to unsubscribe and send unsubscription email
app.post("/unsubscribe", async (req, res) => {
  console.log(`Received a request to unsubscribe: ${req.body._userAddress}`);

  let subscriptions = getSubscriptions();

  if (!subscriptions.includes(req.body._userAddress)) {
    console.log(
      `Email ID ${req.body._userAddress} does not exist in the subscription list.`
    );
    return res.status(404).json({
      success: false,
      message: "Email ID does not exist in the subscription list.",
    });
  }

  subscriptions = subscriptions.filter(
    (email) => email !== req.body._userAddress
  );
  updateSubscriptions(subscriptions);

  const result = await sendMail(req.body._userAddress, "unsubscribe");

  if (!result.success) {
    console.error("Error sending unsubscription mail:", result.error);
    return res.status(500).json(result);
  }

  console.log(
    `Unsubscription mail sent successfully. Email ID ${req.body._userAddress} removed from the subscription list.`
  );

  res.status(200).json({
    success: true,
    data: result.data,
    message:
      "Unsubscription mail sent successfully. Email ID removed from the subscription list.",
  });
});

// Route to verify the admin
app.post("/verifyAdmin", async (req, res) => {
  console.log(`Received a request to verify an admin: ${req.body.adminID}`);

  const result = await verifyID(req.body.adminID);

  if (result) {
    console.log(`Admin ID ${req.body.adminID} is valid.`);
    return res.status(200).json({
      success: true,
      message: "Admin ID is valid.",
    });
  } else {
    console.log(`Admin ID ${req.body.adminID} is not valid.`);
    return res.status(403).json({
      success: false,
      message: "Admin ID is not valid.",
    });
  }
});

// Route to get the subscriber list
app.get("/subscribers", (req, res) => {
  console.log("Received a request for subscriber list");

  let subscriptions = getSubscriptions();

  console.log("Returning subscriber list");

  res.status(200).json({
    success: true,
    data: subscriptions,
    message: "Subscriber list retrieved successfully.",
  });
});

// Route to send a newsletter
app.post("/newsletter", async (req, res) => {
  console.log(`Received a request to send a newsletter`);

  const htmlContent = req.body.htmlContent; // The newsletter content sent in the request body

  const result = await sendMail(null, "newsletter", htmlContent);

  if (!result.success) {
    console.error("Error sending newsletter:", result.error);
    return res.status(500).json(result);
  }

  console.log(`Newsletter sent successfully to all subscribers.`);

  res.status(200).json({
    success: true,
    data: result.data,
    message: "Newsletter sent successfully to all subscribers.",
  });
});

// Setup server to listen to requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
