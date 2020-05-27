import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  chatHeaderSm: {
    textAlign: "right",
  },
  textContainerMd: {
    // display: "flex",
    // flexDirection: "column",
    marginRight: 100,
    height: "60%",
    // justifyContent: "space-between",
    // textAlign: "right",
  },
  textContainerSm: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  link: {
    marginLeft: 15,
    color: theme.palette.secondary.main,
    "&:visited": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function AppInfo() {
  const classes = useStyles();
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <div
      className={
        greaterThanMd
          ? `${classes.textContainerMd}`
          : `${classes.textContainerSm}`
      }
    >
      <div className={classes.chatHeaderSm}>
        <h1>Chat App</h1>
        <h4 style={greaterThanMd ? {} : { display: "none" }}>
          built with react, express, node, socket.io ...{" "}
        </h4>
        <h4 style={greaterThanMd ? {} : { display: "none" }}>
          ... and material-ui{" "}
        </h4>
        <h1 style={greaterThanMd ? {} : { display: "none" }}>
          <span role="img" aria-label="emoji">
            🤘
          </span>
        </h1>{" "}
      </div>
      <div className={classes.socialLinks}>
        <a href="https://github.com/earthddx" className={classes.link}>
          <GitHubIcon />
        </a>
        <a href="https://twitter.com/ArtemMurzo" className={classes.link}>
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}
