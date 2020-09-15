import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { getRnd } from "../util/string";

const DisplayWords = ({ words = [] }) => {
  return (
    <Grid container spacing={1}>
      {words.map((word) => (
        <Grid item key={getRnd()} xs={3}>
          <Typography>{word}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default DisplayWords;
