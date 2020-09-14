import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Setting from "../components/Setting";
const App = () => {
  const [target, setTarget] = useState("");

  const handleUpdate = () => {
    console.log(target);
  };
  return (
    <div className="App">
      <Setting
        value={target}
        handleChange={({ target: { value } }) => setTarget(value)}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default App;
