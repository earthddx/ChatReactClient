
backend deployed at https://rens-chat-app.herokuapp.com/

backend source code: https://github.com/earthddx/ChatReact

## Why Socket.IO?
In short, it allows instant messaging and chat.

<b>Socket.IO</b>'s "Hello world" is a chat app in just a few lines of code.
Sockets have traditionally been the solution around which most real-time chat systems are architected, providing a bi-directional communication channel between a client and a server.
This means that the server can push messages to clients. Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients.
<b>Socket.IO</b> is using this technology (basically, anything that is real-time could be done in a pretty simple way with it).

## How to get server running 
In order to get server running on your localhost you can do something as simple as:
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



## socket.emit(eventName[, …args][, ack])
<ul>
<li><code>eventName</code> (String)
<li><code>args</code>
<li><code>ack</code> (Function)
<li>Returns Socket
</ul>

Emits an event to the socket identified by the string name. Any other parameters can be included. All serializable datastructures are supported, including <code>Buffer</code>.
```
socket.emit('hello', 'world');
socket.emit('with-binary', 1, '2', { 3: '4', 5: new Buffer(6) });
```

The <code>ack</code> argument is optional and will be called with the client’s answer.

```
io.on('connection', (socket) => {
  socket.emit('an event', { some: 'data' });

  socket.emit('ferret', 'tobi', (data) => {
    console.log(data); // data will be 'woot'
  });

  // the client code
  // client.on('ferret', (name, fn) => {
  //   fn('woot');
  // });

});
```

## socket.on(eventName, callback)
<ul>
<li><code>eventName</code> (String)
<li><code>callback</code> (Function)
<li>Returns Socket
</ul>

Register a new handler for the given event.
```
socket.on('news', (data) => {
  console.log(data);
});

// with multiple arguments
socket.on('news', (arg1, arg2, arg3, arg4) => {
  // ...
});
// with callback
socket.on('news', (cb) => {
  cb(0);
});
```
The socket actually inherits every method of the <u>Emitter</u> class, like <code>hasListeners</code>, <code>once</code> or <code>off</code> (to remove an event listener).
