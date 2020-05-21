import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    width: "100%",
  },
  input: {
    width: '80%',
    padding: '10px'
  },
  button:{
    width: '20%',
    padding: '10px 0px 10px 0px'
  }
}));

export default function InputField({ message, setMessage, sendMessage }) {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <div className={classes.input}>
        <Input
          fullWidth
          autoComplete="off"
          autoFocus="true"
          className="input"
          placeholder="enter a message.."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
      </div>
      <div className={classes.button}>
        <Button
          color="primary"
          size="small"
          variant="contained"
          onClick={(e) => sendMessage(e)}
        >
          Send
        </Button>
      </div>
    </form>
  );
}
