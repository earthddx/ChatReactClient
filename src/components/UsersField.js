import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 100,
    marginRight: 10,
    height: "60%",
    justifyContent: "space-between",
  },
  userNameList: {
    textAlign: "left",
    color: theme.palette.secondary.main,
  },
  userName: {
    color: theme.palette.secondary.main,
  },
}));

export default function UsersField({ users, room, name }) {
  const classes = useStyles();
  const userName = name;
  return (
    <div className={classes.textContainer}>
      {users ? (
        <div>
          <h1>
            Hello, <span className={classes.userName}>{name}</span>!
          </h1>
          <h2 style={{ fontWeight: 300 }}>
            <span role="img" aria-label="emoji">
              💬
            </span>
            <span style={{ fontWeight: 600 }}>{room}</span> other users online (
            {users.length - 1}):
          </h2>
          <h4 className={classes.userNameList}>
            {users.map(({ name }) => {
              if (userName !== name) {
                return <div key={name}>{name}</div>;
              }
              return null
            })}
          </h4>
        </div>
      ) : null}
    </div>
  );
}
