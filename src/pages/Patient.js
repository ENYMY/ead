import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
function Patient() {
  const history = useHistory();
  const addPatientHandler = () => {
    history.push("/patient/add");
  };

  const viewPatientHandler = () => {
    history.push("/patient/view");
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
                  onClick={addPatientHandler}>
                  Add Patient
                </Button>
              </Box>
            </Grid>

            <Grid item>
              <Box sx={{ width: "200px" }}>
                <Button
                  color='warning'
                  variant='contained'
                  fullWidth
                  onClick={viewPatientHandler}>
                  View All Patients
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Patient;
