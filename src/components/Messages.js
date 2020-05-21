import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { makeStyles } from "@material-ui/core/styles";
import Message from "./Message";


const useStyles = makeStyles((theme) => ({
  messages: {
    //padding: '5% 0',
    overflow: 'auto',
  }
}));

export default function Messages({ messages, name }) {
  const classes = useStyles();
  return (
    <ScrollToBottom className={classes.messages}>
      {messages.map((message, i) => (
        <div key={i} >
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}
