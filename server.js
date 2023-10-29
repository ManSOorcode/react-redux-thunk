/* eslint-disable no-undef */
const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Point to your db.json file
const middlewares = jsonServer.defaults();

server.use(cors()); // Enable CORS
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000; // Define the port for your server

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
