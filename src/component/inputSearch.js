import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: "256px",
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

export default function InputSearch() {
	const classes = useStyles();

	return (
		<Paper component='form' className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder='Tìm kiếm'
			/>
			<Divider className={classes.divider} orientation='vertical' />
			<IconButton
				color='primary'
				className={classes.iconButton}
				aria-label='directions'
			>
				<ExpandMoreIcon />
			</IconButton>
		</Paper>
	);
}
