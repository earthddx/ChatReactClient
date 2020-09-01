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
    paddingBottom: "60px",
  },
  paperMd: {
    width: 440,
    height: 440,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "60px",
  },
  input: {
    position: "absolute",
    bottom: 0,
    width: "inherit",
  },
}));

export default function Chat({ location }) {
  const [name, setName] = useState("");
  const [channel, setChannel] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");
  const ENDPOINT = "https://rens-chat-app.herokuapp.com/";
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const classes = useStyles();

  useEffect(() => {
    //retrieve url back as an object
    const { name, channel } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setChannel(channel);

    // ***
    //on join, pass name and channel to backend
    socket.emit("join", { name, channel }, (error) => {
      if (error) {
        alert(error);
      }
    });

    //clean up function
    return () => {
      socket.emit("disconnect");
      socket.disconnect();
    };
  }, [ENDPOINT, location.search]);

  //message handling
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((msgs) => [...msgs, message]);
    });
    socket.on("channelData", ({ users }) => {
      setUsers(users);
    });
  }, []);

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
            <InfoBar channel={channel} />
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
      {greaterThanMd && users ? (
        <UsersField users={users} channel={channel} name={name} />
      ) : (
        greaterThanMd && (
          <div style={{ padding: "0px 150px" }}>
            <CircularProgress size="10rem" />
          </div>
        )
      )}
    </div>
  );
}
