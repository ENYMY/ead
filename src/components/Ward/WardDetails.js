import React from "react";
import { Grid, Typography, Box } from "@mui/material";
function WardDetails(props) {
  const { ward } = props;
  return (
    <Grid item>
      <Box sx={{ width: "500px", height: "40px", border: "1px solid" }}>
        <Typography variant='button'> {ward}</Typography>
      </Box>
    </Grid>
  );
}

export default WardDetails;
