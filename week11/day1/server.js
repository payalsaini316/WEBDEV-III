// import { websocket } from "ws";  

const  { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

// Handling / Listen
// on => Method , connection => Event Name 
wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
// sending data to the client, triggering the onmessage event on the client side
  ws.send('something');
});