## React Chat

### Technologies used: 

* chai: ^4.1.2,
* cypress: ^2.1.0,
* enzyme: ^3.3.0,
* enzyme-adapter-react-16: ^1.1.1,
* express: ^4.16.3,
* material-ui: ^0.20.0,
* moment: ^2.22.0,
* react: ^16.3.1,
* react-dom: ^16.3.1,
* react-scripts: 1.1.4,
* socket.io: ^2.1.0,
* socket.io-client: ^2.1.0

### Install

`yarn install` or `npm install`

### Run

Run the server first. Listening on port 8000

`node server`

then in a new terminal tab

`yarn start` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Test

`yarn test` or `npm test`

Launches the test runner in the interactive watch mode.<br>

### E2E Test

First run servers and the app in development mode

- in a new tab run `node server`
- in a new tab run `node e2e-server` - this one is required to simulate the comunication between 2 users in the chat
- in a new tab run `yarn start` or `npm start`

Then ejecute in a new tab the command `yarn run test:e2e` or `npm run test:e2e` to open Cypress. Then click on test suit `chat_spec.js`.

To read more about Cypress please visit [https://www.cypress.io/](https://www.cypress.io/)

### Production Build

`yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
