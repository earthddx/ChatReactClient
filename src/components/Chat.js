import React, { useState, useEffect } from "react";
//retrieve data from URL
import queryString from "query-string";
import io from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, useMediaQuery, CircularProgress } from "@material-ui/core";

import Messages from "./Messages";
import InfoBar from "./InfoBar";
import InputField from "./InputField";
import UsersField from "./UsersField";
import AppInfo from "./AppInfo";

let socket;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "20vh auto",
  },
  appInfoMd: {
    display: "flex",
  },
  appInfoSm: {
    display: "flex",
    flexDirection: "column-reverse",
  },

  paperSm: {
    width: 355,
    height: 375,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    //justifyContent: 'space-between',
    paddingBottom: "60px",
  },
  paperMd: {
    width: 440,
    height: 440,
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
    width: "inherit",
  },
}));

export default function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");
  const ENDPOINT = "https://rens-chat-app.herokuapp.com/";
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const classes = useStyles();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search); //retrieve url back as an object

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    }); //on join, pass name and room to backend

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
      setUsers(users);
      console.log(users);
    });
  }, []);

  //func to send messages

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className={classes.root}>
      <div
        className={
          greaterThanMd ? `${classes.appInfoMd}` : `${classes.appInfoSm}`
        }
      >
        <AppInfo />
        <Paper
          className={
            greaterThanMd ? `${classes.paperMd}` : `${classes.paperSm}`
          }
        >
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
      {greaterThanMd && users ? <UsersField users={users} room={room} name={name} />: <div style={{padding: 150}}><CircularProgress size="5rem" /></div>}
    </div>
  );
}
