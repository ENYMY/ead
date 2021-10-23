import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import DoctorDetails from "./DoctorDetails";
import { viewAllDoctor } from "../../services/doctor-service";

function ViewDoctors() {
  const [doctors, setDoctors] = useState(undefined);
  useEffect(() => {
    viewAllDoctor().then((res) => setDoctors(res.data));
  }, []);
  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Grid container direction='column' spacing={3}>
          {doctors === undefined ? (
            <Grid item>No elements yet</Grid>
          ) : (
            doctors.map((doctor) => (
              <DoctorDetails doctor={doctor} key={doctor} />
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ViewDoctors;
