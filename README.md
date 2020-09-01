
backend deployed at https://rens-chat-app.herokuapp.com/

backend source code: https://github.com/earthddx/ChatReact

## Why Socket.IO?
In short, it allows instant messaging and chat.

<b>Socket.IO</b>'s "Hello world" is a chat app in just a few lines of code.
Sockets have traditionally been the solution around which most real-time chat systems are architected, providing a bi-directional communication channel between a client and a server.
This means that the server can push messages to clients. Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients.
<b>Socket.IO</b> is using this technolog (basically, anything that is real-time could be done in a pretty simple way with it).

## How to get server running 
In order to get server running on your localhost you can do as simple as:
```
const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = 4000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT, () => console.log(`Server started on ${PORT}`));
```


