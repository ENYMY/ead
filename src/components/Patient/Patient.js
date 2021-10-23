import React from "react";
import { Grid, Box, Typography } from "@mui/material";

function Patient(props) {
  const { patient } = props;
  return (
    <Grid item>
      <Box sx={{ width: "500px", height: "40px", border: "1px solid" }}>
        <Typography variant='button'> {patient}</Typography>
      </Box>
    </Grid>
  );
}

export default Patient;
