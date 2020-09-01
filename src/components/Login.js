import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
  },
  input: {
    margin: "auto",
    marginTop: 200,
  },
  margin: {
    margin: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    margin: "10px auto",
    display: "flex",
  },
  button: {
    margin: "20px auto",
  },
}));

export default function Login() {
  const [username, setUsername] = useState("");
  const [channel, setChannel] = useState("");
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.input}>
        <TextField
          color="primary"
          className={classes.margin}
          id="standard-basic"
          label="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          className={classes.margin}
          id="standard"
          label="channel"
          onChange={(event) => setChannel(event.target.value)}
        />
      </div>
      <Link
        className={classes.link}
        to={`/chat?name=${username}&channel=${channel}`}
        onClick={(event) =>
          !username || !channel ? event.preventDefault() : null
        }
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={!(username && channel)}
        >
          Sign in
        </Button>
      </Link>
    </form>
  );
}
