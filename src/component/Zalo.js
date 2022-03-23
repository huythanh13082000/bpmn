import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function Zalo() {
	const classes = useStyles();
	const [action, setAction] = useState("");

	return (
		<div item className={classes.formControl1}>
			<TextField
				className={classes.formControl}
				label='To*'
				id='outlined-size-small'
				variant='outlined'
				size='small'
			/>

			<TextField
				className={classes.formControl}
				label='From*'
				id='outlined-size-small'
				variant='outlined'
				size='small'
			/>

			<TextField
				className={classes.formControl}
				label='Các trương module*'
				id='outlined-size-small'
				variant='outlined'
				size='small'
			/>

			<TextField
				className={classes.formControl}
				label='Subject*'
				id='outlined-size-small'
				variant='outlined'
				size='small'
			/>

			<TextField
				className={classes.formControl}
				label='Biểu mẫu*'
				id='outlined-size-small'
				variant='outlined'
				size='small'
			/>
		</div>
	);
}

export default Zalo;

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		width: "98%",
		minHeight: "30px",
	},
	formControl1: {
		marginRight: 10,
	},
}));
