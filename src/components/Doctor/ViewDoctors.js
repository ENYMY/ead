import React from "react";
import { Grid } from "@mui/material";
import DoctorDetails from "./DoctorDetails";
const doctors = [1, 2, 3, 4, 5];

function ViewDoctors() {
  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Grid container>
          {doctors.map((doctor) => (
            <DoctorDetails doctor={doctor} key={doctor} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ViewDoctors;
