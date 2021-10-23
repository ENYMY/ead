import { Grid } from "@mui/material";
import React from "react";
import Patient from "./Patient";

const patients = [1, 2, 3, 4, 5];

function ViewPatients() {
  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Grid container>
          {patients.map((patient) => (
            <Patient patient={patient} key={patient} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ViewPatients;
