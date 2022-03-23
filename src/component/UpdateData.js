import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function UpdateData() {
  const classes = useStyles();

  const data = [
    "Cập nhật trạng thái",
    "Cập nhật thông tin khách hàng",
    "Cập nhật nhóm khách hàng",
    "Cập nhật người phụ trách",
  ];

  return (
    <div className={classes.formControl1}>
      <ButtonGroup
        orientation="vertical"
        // color="primary"
        aria-label="vertical outlined primary button group"
      >
        {data.map((item, index) => (
          <Button style={{ justifyContent: "left" }} key={index}>
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default UpdateData;

const useStyles = makeStyles((theme) => ({
  formControl1: {
    marginLeft: 25,
    minHeight: "30px",
    marginBottom: 30,
  },
}));
