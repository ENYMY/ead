import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import WardDetails from "./WardDetails";
const wards = [1, 2, 3, 4, 5];

function ViewWardDetail() {
  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Grid container>
          {wards.map((ward) => (
            <WardDetails ward={ward} key={ward} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ViewWardDetail;
