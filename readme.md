## Remote Sleep for Windows Machines Using Node.js and Ngrok

This Node.js application allows users to remotely put their Windows machines into sleep mode through an HTTP request. It leverages Windows system utilities and the Ngrok service.

### Prerequisites:

1. **Node.js and NPM**: Ensure you have Node.js and NPM installed. If not, download and install from the [Node.js official website](https://nodejs.org/).

2. **ngrok**: This tool will help in exposing the local server to the public internet. You'll need to create a free account on the [ngrok website](https://ngrok.com/) and set up a free endpoint.

### Setup:

1. **Clone or Download**:
   Clone or download the provided code into a local directory.

2. **Navigate to Directory**:
   Use a terminal or command prompt to navigate to the directory containing the code.

3. **Install Dependencies**:
   As of the provided `package.json`, there aren't any external dependencies to install. If any dependencies are added in the future, you can install them with:
   ```bash
   npm install
   ```

4. **Update Ngrok Endpoint**:
   - Ensure you have an account on ngrok and have set up a free endpoint.
   - Replace `random-subdomain` in the `package.json` `scripts` section with your own ngrok endpoint name.

5. **Start the Server**:
   Use the provided script in `package.json` to start both the Node.js application and ngrok simultaneously:
   ```bash
   npm start
   ```

### Usage:

1. **Trigger Sleep Mode**:
   - After starting the server, your application is accessible via your custom ngrok domain, e.g., `https://random-subdomain.ngrok-free.app/sleep`.
   - Make a GET request to the `/sleep` endpoint of this URL to trigger the sleep function on your machine.
   - The server will respond with "OK!" if the process was successful and "Failed to sleep" otherwise.

### Important Notes:

- This application is intended for educational and personal purposes. Exposing critical system functions over the public internet can have security implications.
- Always ensure your services are secure and don't expose any sensitive functionality without proper authentication and authorization mechanisms.

### Troubleshooting:

- If you encounter an error related to permissions, ensure you are running the terminal or command prompt as an administrator.
- If ngrok fails to start, ensure your internet connection is stable, and the port 3000 is not blocked by any firewall or antivirus program.