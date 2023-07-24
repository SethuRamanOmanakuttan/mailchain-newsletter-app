// Importing required modules
const { Mailchain } = require("@mailchain/sdk");
const {
  welcomeEmailTemplate,
  unsubEmailTemplate,
} = require("../template/emailTemplate");
const { getSubscriptions } = require("./subscriptionManager");
require("dotenv").config("../.env");

// Retrieving the secret recovery phrase from the environment variables
const secretRecoveryPhrase = process.env.SECRET_RECOVERY_PHRASE;

// Initializing a new instance of Mailchain with the secret recovery phrase
const mailchain = Mailchain.fromSecretRecoveryPhrase(secretRecoveryPhrase);

/**
 * Function to send mail.
 * @param {string} _userAddress - The recipient's address
 * @param {string} action - The type of action (subscribe, unsubscribe, or newsletter)
 * @param {string} htmlContent - The HTML content of the email (used for the newsletter action)
 * @returns {object} - An object containing success status and data or error message
 */
async function sendMail(_userAddress, action, htmlContent = "") {
  // Defining the default mail options
  const mailOptions = {
    from: process.env.ADMIN_EMAIL, // sender address
    to: [_userAddress], // list of recipients
    content: {
      text: "",
      html: "",
    },
  };

  // Depending on the action, modify the mail options
  switch (action) {
    case "subscribe": {
      mailOptions.subject = "🌐 Welcome Aboard! Your Web3 Adventure Begins! 🚀";
      mailOptions.content.text = "Thank you for subscribing to web3 NewsLetter";
      mailOptions.content.html = welcomeEmailTemplate;
      break;
    }
    case "unsubscribe": {
      mailOptions.subject = "😞 Sorry to see you go...";
      mailOptions.content.text =
        "You've been unsubscribed from the Web3 Newsletter";
      mailOptions.content.html = unsubEmailTemplate;
      break;
    }
    case "newsletter": {
      mailOptions.subject = "Web 3 Weekly - The latest web3 news and resources";
      mailOptions.content.text = "Here's your Web3 Newsletter";
      mailOptions.content.html = htmlContent;
      mailOptions.to = getSubscriptions(); // Send to all subscribers
      break;
    }
  }

  // Send the mail and get the response
  const { data, error } = await mailchain.sendMail(mailOptions);

  // If there was an error, log it and return an error response
  if (error) {
    console.warn("Mailchain error", error);
    return { success: false, error };
  }

  // If successful, log the data and return a success response
  console.log(data);
  return { success: true, data };
}

// Export the sendMail function for use in other modules
module.exports = {
  sendMail,
};
