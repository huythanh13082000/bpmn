import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import "./form.css";
import InputSearch from "./component/inputSearch";
const currencies = [
	{
		value: "notify",
		label: "Gửi Notify",
	},
	{
		value: "mail",
		label: "Gửi Mail",
	},
	{
		value: "zalo",
		label: "Gửi Zalo",
	},
	{
		value: "sms",
		label: "SMS",
	},
	{
		value: "work",
		label: "Tạo công việc",
	},
	{
		value: "c-data",
		label: "Tạo dữ liệu",
	},
	{
		value: "u-data",
		label: "Cập nhật dữ liệu",
	},
];
function Form(props) {
	const [currency, setCurrency] = React.useState("EUR");

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};

	return (
		<>
			<div className='b-act-div1'>
				<p>Hành động</p>
				<div className='f__btn'>
					<IconButton aria-label='add'>
						<AddIcon color={"primary"} />
					</IconButton>
				</div>
			</div>
			<Box
				border={1}
				style={{ marginLeft: "1rem", padding: "1rem", width: "350px" }}
			>
				<Grid container>
					<Grid container>
						<Grid item xs={10}>
							<TextField
								style={{ width: "256px", padding: 0 }}
								id='outlined-select-act'
								select
								label='Hành động'
								value={currency}
								onChange={handleChange}
								variant='outlined'
							>
								{currencies.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</Grid>
						<Grid item xs={2}>
							<IconButton aria-label='delete'>
								<DeleteIcon />
							</IconButton>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<p>Nơi nhận</p>

						<InputSearch style={{ width: "256px" }} />
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default Form;
