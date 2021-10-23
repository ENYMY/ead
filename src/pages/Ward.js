import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function Ward() {
  const history = useHistory();
  const addWardHandler = () => {
    history.push("/ward/add");
  };

  const viewWardHandler = () => {
    history.push("/ward/view");
  };
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item>
        <Box sx={{ width: "400px", height: "200px", margin: "10px" }}>
          <Grid
            container
            direction='column'
            spacing={6}
            justifyContent='center'
            alignItems='center'>
            <Grid item>
              <Box sx={{ width: "200px" }}>
                <Button
                  color='primary'
                  variant='contained'
                  fullWidth
                  onClick={addWardHandler}>
                  Add Ward details
                </Button>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ width: "200px" }}>
                <Button
                  color='secondary'
                  variant='contained'
                  fullWidth
                  onClick={viewWardHandler}>
                  View All ward
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Ward;
