// Importing Mailchain SDK
const { Mailchain } = require("@mailchain/sdk");

// Retrieving the secret recovery phrase (24-word mnemonic phrase) from the environment variables
const secretRecoveryPhrase = process.env.SECRET_RECOVERY_PHRASE;

// Initializing a new instance of Mailchain with the secret recovery phrase
const mailchain = Mailchain.fromSecretRecoveryPhrase(secretRecoveryPhrase);

/**
 * Verifies whether the provided ID matches the ID of the admin.
 *
 * @param {string} _adminID - The ID to be verified
 * @returns {boolean} - True if the ID matches, false otherwise
 * @throws {Error} - If an error occurs while fetching the admin details
 */
async function verifyID(_adminID) {
  try {
    // Fetching the admin details
    const adminDetails = await mailchain.user();
    console.log(adminDetails);

    // If no details could be fetched or the admin username is not set, throw an error
    if (!adminDetails || !adminDetails.username) {
      throw new Error("Could not fetch admin details");
    }

    // If the provided ID matches the admin username, return true, otherwise return false
    return _adminID === adminDetails.username;
  } catch (error) {
    // If an error occurs, log it and return false
    console.error(`Failed to verify admin ID: ${error.message}`);
    return false;
  }
}

// Exporting the verifyID function for use in other modules
module.exports = {
  verifyID,
};
