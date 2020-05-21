import React, { useState, useEffect } from "react";
//retrieve data from URL
import queryString from "query-string";
import io from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Messages from "./Messages";
import InfoBar from "./InfoBar";
import InputField from "./InputField";

let socket;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "20vh auto",
  },
  paper: {
    width: 400,
    height: 400,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    //justifyContent: 'space-between',
    paddingBottom: "60px",
  },
  input: {
    position: "absolute",
    bottom: 0,
    //right: 0,
    width: 'inherit'
  },
}));

export default function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:4000";
  const classes = useStyles();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search); //retrieve url back as an object

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {}); //on join, pass name and room to backend

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  //message handling
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((msgs) => [...msgs, message]);
    });
    socket.on("room", ({ users }) => {
      setName(users);
    });
  }, []);

  //func to send messages

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.info}>
          <InfoBar room={room} />
        </div>
        <Messages messages={messages} name={name} />
        <div className={classes.input}>
          <InputField
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </Paper>
    </div>
  );
}
