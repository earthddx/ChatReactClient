import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';

const useStyles = makeStyles((theme) => ({
  chatInfo: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10
  },
  link: {
    color: theme.palette.primary.main,
    "&:visited": {
      color: theme.palette.primary.main,
    },
  },
 
}));

export default function InfoBar({ channel }) {
  const classes = useStyles();
  return (
    <div>
      <Paper>
        <div className={classes.chatInfo}>
          <div>
            <FiberManualRecordTwoToneIcon color="secondary"/>
          </div>
          <div>
            <h3 style={{ margin: 0 }}>{channel}</h3>
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
