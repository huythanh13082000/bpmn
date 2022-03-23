import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Zalo from "./Zalo";
import Notify from "./Notify";
import UpdateData from "./UpdateData";
import CreateData from "./CreateData";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

function Form() {
	const classes = useStyles();
	const [action, setAction] = useState("");
	console.log(action);
	const [address, setAddress] = useState("");
	const [state1, setState1] = useState({
		checkedA: false,
	});
	const handleChange = (event) => {
		setState1({ ...state1, [event.target.name]: event.target.checked });
	};

	const actions = [
		"",
		"Gửi Notify",
		"Gửi Mail",
		"Gửi Zalo",
		"SMS",
		"Tạo công việc",
		"Tạo dữ liệu",
		"Cập nhật dữ liệu",
	];

	console.log(actions);

	return (
		<Box>
			<Grid container wrap='nowrap' alignItems='center'>
				<Grid item>
					<FormControl variant='outlined' className={classes.formControl}>
						<InputLabel id='demo-simple-select-outlined-label'>
							Hành động*
						</InputLabel>
						<Select
							labelId='demo-simple-select-outlined-label'
							id='demo-simple-select-outlined'
							value={action}
							onChange={(e) => setAction(e.target.value)}
							label='Hành động*'
							style={{ height: 40, marginTop: 8 }}
						>
							{actions.map((action, index) => (
								<MenuItem value={index} key={index} style={{ display: "flex" }}>
									{action}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs zeroMinWidth>
				</Grid>
			</Grid>
			{action == 1 && <Notify />}
			{action == 3 && <Zalo />}
			{action == 6 && <CreateData />}
			{action == 7 && <UpdateData />}
		</Box>
	);
}

export default Form;

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		width: "24.5rem",
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
