import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Setting = ({ handleChange, value = "", handleUpdate }) => {
  const classes = useStyles();
  return (
    <div className={classes.settingRoot}>
      <Typography className={classes.typo}>Target Word</Typography>
      <div className={classes.textRoot}>
        <TextField value={value} onChange={handleChange} />
        <Button color="primary" variant="contained" onClick={handleUpdate}>
          Update
        </Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  settingRoot: {
    padding: theme.spacing(2),
  },
  typo: {
    fontWeight: "600",
  },
  textRoot: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default Setting;
