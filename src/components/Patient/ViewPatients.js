import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { viewAllPatient } from "../../services/patient-service";
import Patient from "./Patient";

function ViewPatients() {
  const [patients, setPatients] = useState(undefined);
  useEffect(() => {
    viewAllPatient().then((res) => setPatients(res.data));
  }, []);
  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Grid container direction='column' spacing={3}>
          {patients === undefined ? (
            <Grid item>No elements yet</Grid>
          ) : (
            patients.map((patient) => (
              <Patient patient={patient} key={patient.id} />
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ViewPatients;
