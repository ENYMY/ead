import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import Navigation from "./Navigation";

const PageLayout = (props) => {
  return (
    <Fragment>
      <Grid container direction='column' spacing={2}>
        <Grid item xs={12}>
          <Navigation />
        </Grid>
        <Grid item xs={12}>
          {props.children}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PageLayout;
