import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function Notify() {
  const classes = useStyles();
  const [action, setAction] = useState("");

  return (
    <Box>
      <Grid container wrap="nowrap" alignItems="center">
        <Grid item>
          <TextField
            className={classes.formControl}
            label="To*"
            id="outlined-size-small"
            // defaultValue="Small"
            variant="outlined"
            size="small"
          />

          <TextField
            className={classes.formControl}
            label="From*"
            id="outlined-size-small"
            // defaultValue="Small"
            variant="outlined"
            size="small"
          />

          <TextField
            className={classes.formControl}
            label="Các trương module*"
            id="outlined-size-small"
            // defaultValue="Small"
            variant="outlined"
            size="small"
          />

          <TextField
            className={classes.formControl}
            label="Subject*"
            id="outlined-size-small"
            // defaultValue="Small"
            variant="outlined"
            size="small"
          />

          <TextField
            className={classes.formControl}
            label="Biểu mẫu*"
            id="outlined-size-small"
            // defaultValue="Small"
            variant="outlined"
            size="small"
          />
        </Grid>
        {/* <Grid item xs zeroMinWidth>

        </Grid> */}
      </Grid>
    </Box>
  );
}

export default Notify;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: 4,
    marginRight: 1,
  },

  formControl: {
    margin: theme.spacing(1),
    minHeight: "30px",
  },
  formControl1: {
    margin: theme.spacing(1),
    minWidth: "35vw",
    minHeight: "30px",
  },
  selectEmpty: {},

  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
