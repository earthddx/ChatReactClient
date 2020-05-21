import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  sentByUser: {
    display: "flex",
    justifyContent: "flex-end",
  },
  userName: {
    fontSize: ".8rem",
  },
  userText: {
    padding: "0 5px",
    marginRight: "5px",
    marginBottom: "5px",
    fontSize: "1.1rem",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px",
  },
  notSentByUser: {
    display: "flex",
    justifyContent: "flex-start",
  },
  otherName: {
    fontSize: ".8rem",
  },
  otherText: {
    padding: "0 5px",
    marginLeft: "5px",
    marginBottom: "5px",
    fontSize: "1.1rem",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "10px",
  },
}));

export default function Message({ message: { user, text }, name }) {
  const classes = useStyles();
  let isSentByCurrUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrUser = true;
  }
  return isSentByCurrUser ? (
    <div className={classes.sentByUser}>
      <p className={classes.userName}>{trimmedName}</p>
      <div className={classes.userText}>
        <p>{text}</p>
      </div>
    </div>
  ) : (
    <div className={classes.notSentByUser}>
      <div className={classes.otherText}>
        <p>{text}</p>
      </div>
      <p className={classes.otherName}>{user}</p>
    </div>
  );
}
