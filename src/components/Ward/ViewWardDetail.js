import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import WardDetails from "./WardDetails";
import { viewAllWard } from "../../services/ward-service";

function ViewWardDetail() {
  const [wards, setWards] = useState(undefined);
  useEffect(() => {
    viewAllWard().then((res) => setWards(res.data));
  }, []);
  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Grid container direction='column' spacing={3}>
          {wards === undefined ? (
            <Grid item>No elements yet</Grid>
          ) : (
            wards.map((ward) => <WardDetails ward={ward} key={ward.id} />)
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ViewWardDetail;
