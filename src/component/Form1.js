import React from "react";
import { useState,useEffect, useRef, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Form from "./Form";
import AddIcon from '@material-ui/icons/Add';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AddressForm from "./AddressForm";


//init State
const initState = {
  actions: [],
};

//Action
const ADD_ACTION = "add_action";
const DELETE_ACTION = "delete_action";

const addAction = (payload) => {
  return {
    type: ADD_ACTION,
    payload,
  };
};

const deleteAction = (payload) => {
  return {
    type: DELETE_ACTION,
    payload,
  };
};

//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        actions: [...state.actions, action.payload],
      };

    case DELETE_ACTION:
      const newActions = [...state.actions];
      newActions.splice(action.payload, 1);
      return {
        ...state,
        actions: newActions,
      };

    default:
      throw new Error("Invalid action");
  }
};

function Form1() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [button1, setButton1] = useState(false);
  const { actions } = state;

  useEffect(() => {
    if(actions.length == 0){
      setButton1(false);
    }
  },[actions])

  console.log(actions);
  const handleAdd = () => {
    dispatch(addAction(<Form/>));
    setButton1(true);
  };

  const classes = useStyles();

  const [state1, setState1] = useState({
    checkedA: false,
  });
  const handleChange = (event) => {
    setState1({ ...state1, [event.target.name]: event.target.checked });
  };


   const handleDelete = (index) => {
    dispatch(deleteAction(index));
  }
  return (
    <Box className={classes.paper}>
      <Grid container wrap="nowrap" alignItems="center">
        <Grid item xs={10} style={{ marginLeft: 10 }}>
          <h3>Hành động</h3>
        </Grid>
        <Grid item xs zeroMinWidth>
          <IconButton aria-label="add" onClick={() => handleAdd()}>
            <AddIcon style={{ fontSize: 30 }} color='primary'/>
          </IconButton>
        </Grid>
      </Grid>

      {actions.map((action, index) => (
        <Grid key={index} style={{ marginBottom: 5 }}>
          <Box border={1} className={classes.paper}>
            <div style={{display:'flex'}}>
              <div>
                {action}
              </div>
              <div>
      
                <IconButton aria-label="delete" onClick={() => handleDelete(index)} style={{ marginTop: 10}}>
                  <DeleteIcon style={{ fontSize: 25, }} />
                </IconButton>

              </div>
            </div>
            <AddressForm/>
          </Box>
        </Grid>
      ))}
      {button1?
        <Grid container wrap="nowrap" alignItems="center">
          <Grid item xs={9} style={{ marginLeft: 6 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state1.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label="Tự động"
            />
          </Grid>
          <Grid style={{ padding: 5 }}>
            <Button
              variant="outlined"
              color="primary"
            >
              Lưu
            </Button>
          </Grid>
          <Grid style={{ padding: 5 }}>
            <Button
              variant="outlined"
              color="secondary"
            >
              Hủy
            </Button>
          </Grid>
        </Grid>
      :null}
      
    </Box>
  );
}

export default Form1;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: 4,
    marginRight: 1,
    width: "23.5vw",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: "30vw",
    minHeight: "30px",
  },
  formControl1: {
    margin: theme.spacing(1),
    minWidth: "35vw",
    minHeight: "30px",
  },
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
