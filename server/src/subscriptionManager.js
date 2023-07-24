// Importing required modules
const fs = require("fs");
const path = require("path");

// Setting up the file path
const filePath = path.resolve(__dirname, "temp_subscriptions.json");

/**
 * Function to get subscriptions from the file.
 * If the file doesn't exist, create a new file with an empty array and return an empty array.
 * If there's an error reading the file, return an empty array.
 * @returns {Array} - An array of subscriptions
 */
function getSubscriptions() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
    return [];
  } else {
    try {
      return JSON.parse(fs.readFileSync(filePath, "utf8"));
    } catch (error) {
      console.error("Error reading subscriptions.json:", error);
      return [];
    }
  }
}

/**
 * Function to update the subscriptions in the file.
 * @param {Array} subscriptions - The new array of subscriptions
 */
function updateSubscriptions(subscriptions) {
  fs.writeFileSync(filePath, JSON.stringify(subscriptions));
}

// Export the functions for use in other modules
module.exports = { getSubscriptions, updateSubscriptions };
