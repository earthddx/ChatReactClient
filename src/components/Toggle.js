import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { FormControlLabel, Switch } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toggle: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
  },
}));

const BlueSwitch = withStyles({
  switchBase: {
    color: blue[300],

    "&$checked": {
      color: blue[500],
    },
    "&$checked + $track": {
      backgroundColor: blue[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function Toggle({ theme, toggleTheme }) {
  //const isLight = theme === "light";
  const [state, setState] = useState({
    checkedA: false,
  });
  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.toggle}>
      <FormControlLabel
        control={
          <BlueSwitch
            checked={state.checkedA}
            name="checkedA"
            onChange={handleChange}
            onClick={toggleTheme}
          />
        }
      />
    </div>
  );
}
