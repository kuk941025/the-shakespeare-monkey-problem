import React from "react";
import Typography from "@material-ui/core/Typography";

const DisplayInfo = ({ maxPop, mutRate, generations = 0 }) => {
  return (
    <div>
      <Typography>{`Population: ${maxPop}`}</Typography>
      <Typography>{`Mutation Rate: ${mutRate}`}</Typography>
      <Typography>{`Generations: ${generations}`}</Typography>
    </div>
  );
};

export default DisplayInfo;
