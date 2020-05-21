import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles((theme) => ({
  chatInfo: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    color: "white",
    "&:visited": {
      color: "white",
    },
  },
}));

export default function InfoBar({ room }) {
  const classes = useStyles();
  return (
    <div>
      <Paper>
        <div className={classes.chatInfo}>
          <div>
            <ChatIcon />
          </div>
          <div>
            <h3 style={{ margin: 0 }}>{room}</h3>
          </div>
          <div>
            <a href="/" className={classes.link}>
              <CloseIcon />
            </a>
          </div>
        </div>
      </Paper>
    </div>
  );
}
