import React from "react";
import { Grid, Box, Typography } from "@mui/material";

function DoctorDetails(props) {
  const { doctor } = props;
  return (
    <Grid item>
      <Box sx={{ width: "500px", height: "40px", border: "1px solid" }}>
        <Typography variant='button'> {doctor}</Typography>
      </Box>
    </Grid>
  );
}

export default DoctorDetails;
