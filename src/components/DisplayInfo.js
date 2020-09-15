import React from "react";
import Typography from "@material-ui/core/Typography";

const DisplayInfo = ({ maxPop, mutRate, generations = 0, bestWord = "" }) => {
  return (
    <div>
      <Typography>{`Population: ${maxPop} Mutation Rate: ${mutRate}`}</Typography>{" "}
      <Typography>{`Generations: ${generations}`}</Typography>
      <Typography>{`best: ${bestWord}`}</Typography>
    </div>
  );
};

export default DisplayInfo;
