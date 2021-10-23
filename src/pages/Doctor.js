import { Grid, Box, Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";

function Doctor() {
  const history = useHistory();
  const addDoctorHandler = () => {
    history.push("/doctor/add");
  };

  const viewDoctorHandler = () => {
    history.push("/doctor/view");
  };
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item>
        <Box sx={{ width: "400px", height: "200px", margin: "15px" }}>
          <Grid
            container
            direction='column'
            spacing={6}
            justifyContent='center'
            alignItems='center'>
            <Grid item>
              <Box sx={{ width: "200px" }}>
                <Button
                  color='success'
                  variant='contained'
                  fullWidth
                  onClick={addDoctorHandler}>
                  Add Doctor Details
                </Button>
              </Box>
            </Grid>

            <Grid item>
              <Box sx={{ width: "200px" }}>
                <Button
                  color='warning'
                  variant='contained'
                  fullWidth
                  onClick={viewDoctorHandler}>
                  View All Doctors
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Doctor;
