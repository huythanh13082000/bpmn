import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

import ArrowDropDownIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import DirectionsIcon from '@material-ui/icons/Directions';
const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
});

function AddressForm(){
    const classes = useStyles();
    const [address, setAddress] = useState("");
    return(
        <Box>
            {/* <Grid>
                <Form/>
            </Grid>      */}
            <Grid>
                <Autocomplete
                    className={classes.formControl1}
                    id="filter-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    filterOptions={filterOptions}
                    style={{ width: '20.4vw' }}
                    size="small"   
                    renderInput={(params) => 
                        <TextField  {...params} label="Nơi nhận" variant="outlined" />
                    }
                />
                <div className={classes.divider} />
            </Grid>
            {/* <Paper component="form" variant='outlined' className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                    <DirectionsIcon />
                </IconButton>
            </Paper> */}
        </Box>
    )
}

export default AddressForm;

const useStyles = makeStyles((theme) => ({
    formControl1: {
      margin: theme.spacing(1),
    //   minWidth: "35vw",
    //   minHeight: "30px",
    },
    root: {
        margin: theme.spacing(1),
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 450,
        
    
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        // minWidth: "35vw",
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
      divider: {
        height: theme.spacing.unit * 2,
      },
  }));

  const top100Films = [
    { title: 'Hà Nội'},
    { title: 'Thái Bình'},
    { title: 'Nam Định'},
    { title: 'TP.Hồ Chí Minh'},
    { title: 'Ninh Bình'},
    { title: "Phú Quốc"},
    
  ];
  