import { Paper, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Paper elevation={3} sx={{ minWidth: "500px", minHeight: "200px" }}>
      <Typography variant='button' align='center' component='h1'>
        Welcome to Sri Lanka Hospitals
      </Typography>
    </Paper>
  );
}

export default Home;
