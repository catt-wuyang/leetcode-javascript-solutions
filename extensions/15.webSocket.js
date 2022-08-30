/**
 * html script
 */
const ws = new WebSocket("ws://localhost:8080");
ws.onopen = function () {
  console.log("client: ws connection is open");
  ws.send("hello");
};
ws.onmessage = function (e) {
  console.log(`client: received ${e.data}`);
};

/**
 * sec-websocket-accept
 */
const crypto = require("crypto");
const magic = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
const secWebSocketKey = "w4v7O6xFTi36lq3RNcgctw==";

const secWebSocketAccept = crypto
  .createHash("sha1")
  .update(secWebSocketKey + magic)
  .digest("base64");

console.log(secWebSocketAccept); // Oy4NRAQ13jhfONC7bP8dTKb4PTU=

/**
 * server useage
 */
const app = require("express")();
const server = require("http").Server(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("server: receive connection.");

  ws.on("message", function incoming(message) {
    console.log(`server: received ${message}`);
    ws.send("server: reply");
  });

  ws.on("pong", () => {
    console.log("server: received pong form client");
  });

  ws.send("world");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000);
