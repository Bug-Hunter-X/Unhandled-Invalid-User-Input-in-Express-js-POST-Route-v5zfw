# Express.js Unhandled User Input Bug
This repository demonstrates a common error in Express.js applications: lack of input validation and error handling for POST requests.  The `bug.js` file shows the flawed code, while `bugSolution.js` provides a corrected version.

## Problem
The Express.js server in `bug.js` accepts user data via a POST request to `/users`. However, it does not validate the incoming data.  If the request body is malformed or missing required fields, the server may crash or produce incorrect results.  The current implementation silently fails without providing feedback to the client.

## Solution
The `bugSolution.js` file shows the improved version which handles invalid inputs gracefully. It uses middleware to validate the user data and sends appropriate HTTP error responses if issues are found.

## How to reproduce
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to start the flawed server.
5. Send a malformed POST request to `http://localhost:3000/users` (e.g., missing required fields). Observe the server's behavior.
6. Repeat steps 4 and 5 with `node bugSolution.js` to observe the improved error handling.