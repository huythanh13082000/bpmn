import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";

function CreateData() {
	const classes = useStyles();

	const [selectedDate1, setSelectedDate1] = useState(new Date());

	const [selectedDate2, setSelectedDate2] = useState(new Date());

	const handleDateChange1 = (date) => {
		setSelectedDate1(date);
	};

	const handleDateChange2 = (date) => {
		setSelectedDate2(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Box style={{padding:"0.5rem"}}>
				<Grid container wrap='nowrap' >
          <Grid item xs={6}>
            <TextField
              style={{width:'98%'}}
							label='Thêm cơ hội kinh doanh'
							id='outlined-size-small'
							variant='outlined'
							size='small'
						/>
					</Grid>
					<Grid item xs={6}>
            <TextField
							label='Tên cơ hội kinh doanh'
							id='outlined-size-small'
							variant='outlined'
							size='small'
						/>
					</Grid>
				</Grid>

        <Grid container wrap='nowrap' alignItems='center'>
        <Grid item xs={6}></Grid>
					<Grid item xs={6}>
						<KeyboardDatePicker
							size='small'
							inputVariant='outlined'
							margin='normal'
							id='date-picker-dialog'
							label='Date picker dialog'
							format='MM/dd/yyyy'
							value={selectedDate1}
							onChange={handleDateChange1}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</Grid>
				</Grid>

				<Grid container wrap='nowrap' alignItems='center'>
					<Grid item xs={6}></Grid>
					<Grid item xs={6}>
						<KeyboardDatePicker
							size='small'
							inputVariant='outlined'
							margin='normal'
							id='date-picker-dialog'
							label='Date picker dialog'
							format='MM/dd/yyyy'
							value={selectedDate2}
							onChange={handleDateChange2}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</Grid>
				</Grid>

				<Grid container wrap='nowrap' alignItems='center'>
					<Grid item xs={6}></Grid>
					<Grid item xs={6}>
						<TextField
							label='Khách hàng'
							id='outlined-size-small'
							// defaultValue="Small"
							variant='outlined'
							size='small'
						/>
					</Grid>
				</Grid>
			</Box>
		</MuiPickersUtilsProvider>
	);
}

export default CreateData;

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minHeight: "30px",
	},
	formControl1: {
		margin: theme.spacing(1),
		minHeight: "30px",
	},
	formControl2: {
		margin: theme.spacing(1),
		minHeight: "30px",
	},
}));
