# Newsletter Management Application

This is a full-stack JavaScript demo application that showcases the capabilities of the Mailchain SDK. The application provides an interface for users to subscribe to newsletters and for administrators to send newsletters to the subscribers.

## Table of Contents

- [About Mailchain](#about-mailchain)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Project Navigation](#app-navigation-and-user-options)
- [Available Scripts](#available-scripts)
- [License](#license)

## About Mailchain

Mailchain is a multi-chain communication protocol that helps you communicate with your users across any protocol. It provides end-to-end encryption by default and supports 1:1, 1:many and group communication.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js:** You need to have Node.js and npm installed on your machine. To install these, follow the instructions [here](https://nodejs.org/en/download/).
- **Mailchain email address:** A registered Mailchain email address is required to run this project.

### Installation

1. Clone this repository:
   ```sh
   git clone <repository-url>
   ```
2. From the root directory, install the dependencies:

   ```sh
   npm install
   ```

3. Navigate into the client directory and install dependencies:
   ```sh
   cd client && npm install
   ```
4. In the root directory, add your Mailchain account [Secret Recovery Phrase](https://docs.mailchain.com/user/guides/settings/secret-recovery-phrase/) and [Email address](https://docs.mailchain.com/developer/address-formatting/) to the .env file. You can rename the .env.example file. This account will act as the admin account.
   ```sh
   SECRET_RECOVERY_PHRASE="YOUR-MAILCHAIN-SECRET-RECOVERY-PHRASE"
   ADMIN_EMAIL="YOUR-ADMIN-EMAIL-ADDRESS"
   ```
5. From the root directory, start the application:
   ```sh
   npm run dev
   ```

The React application will run on localhost:3000.

# Project Structure

The project is structured into a client and a server. The client is a React application that provides the user interface, and the server handles the Mailchain operations.

- `/client`: React frontend
- `/server`: Express server

The code is designed to run in a local setup.

# Available Scripts

- `npm run dev`: Runs both the client and server in development mode.

# App Navigation and User Options

The application offers two main functionalities which are accessed through the 'User' and 'Admin' options on the landing page.

## User Option

In the 'User' section, users can subscribe to the mailing list. You can use any valid Mailchain address to Subscribe to the newsletter. Upon submission of the address, they will receive a confirmation email. Once the email is confirmed, the user will be added to the mailing list and will receive newsletters sent by the admin.

## Admin Option

In the 'Admin' section, an admin user can create and send newsletters. After logging in with the admin credentials [the admin account username], the admin is presented with a text editor where they can compose the newsletter. After clicking 'Send Letter', the newsletter will be sent to all subscribed users.

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
