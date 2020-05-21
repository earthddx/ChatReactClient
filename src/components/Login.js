import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
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
  const [room, setRoom] = useState("");
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.input}>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          label="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          className={classes.margin}
          id="input-textfield"
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          label="room"
          onChange={(event) => setRoom(event.target.value)}
        />
      </div>
      <Link
        className={classes.link}
        to={`/chat?name=${username}&room=${room}`}
        onClick={(event) =>
          !username || !room ? event.preventDefault() : null
        }
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Sign in
        </Button>
      </Link>
    </form>
  );
}
