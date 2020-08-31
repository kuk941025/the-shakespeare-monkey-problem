import React from 'react';
import Grid from "@material-ui/core/Grid";
import Setting from '../components/Setting';
const App = () => {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Setting />
        </Grid>
        <Grid item xs={6}>
          asd2
        </Grid>
      </Grid>
    </div>
  )
}


export default App;
