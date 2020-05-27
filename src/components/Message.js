import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactEmoji from 'react-emoji'

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
    display: 'inline-block',
    maxWidth: '80%',
    wordWrap: 'break-word',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "10px",
  },
  notSentByUser: {
    display: "flex",
    justifyContent: "flex-start",
  },
  otherName: {
    fontSize: ".8rem",
    margin: 2,
  },
  otherText: {
    padding: "0 5px",
    marginLeft: "5px",
    marginBottom: "5px",
    wordWrap: 'break-word',
    fontSize: "1.1rem",
    display: 'inline-block',
    maxWidth: '80%',
    backgroundColor: "#8c8c8c",
    borderRadius: "10px",
  },
  sentByAdmin: {
    display: "flex",
    justifyContent: "center",
  },
  adminText: {},
}));

export default function Message({ message: { user, text }, name }) {
  const classes = useStyles();
  let isSentByCurrUser = false;
  let isSentByAdmin = false;
  const trimmedName = name.trim().toLowerCase();

   if (user === trimmedName) {
     isSentByCurrUser = true;
   }

  if (user === "admin") {
    isSentByAdmin = true;
  }
  return !isSentByAdmin ? (
    isSentByCurrUser ? (
      <div className={classes.sentByUser}>
        {/* <p className={classes.userName}>{trimmedName}</p> */}
        <div className={classes.userText}>
          <p style={{ margin: 3, wordWrap: "break-word", fontFamily: 'Open Sans' }}>{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    ) : (
      <div className={classes.notSentByUser}>
        <div className={classes.otherText}>
          <p style={{ margin: 2, wordWrap: "break-word", fontFamily: 'Open Sans' }}>{ReactEmoji.emojify(text)}</p>
        </div>
        <p className={classes.otherName}>{user}</p>
      </div>
    )
  ) : (
    <div className={classes.sentByAdmin}>
      <div className={classes.adminText}>
        <p>{text}</p>
      </div>
    </div>
  );
}
