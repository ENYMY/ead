import React from "react";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import { addWard } from "../../services/ward-service";
const initialValues = {
  wardNumber: "",
  wardName: "",
  beds: "",
};
function AddWardDetails() {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      addWard(values).then((res) => alert(res.data));
    },
  });
  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Box sx={{ margin: "10px" }}>
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <Box>
                <Typography variant='h6'>Add a New Ward Information</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Grid container spacing={2} direction='row'>
                <Grid item xs={12}>
                  <Box>
                    <TextField
                      label='Ward Number'
                      variant='outlined'
                      fullWidth
                      size='small'
                      name='wardNumber'
                      value={formik.values.wardNumber}
                      onChange={formik.handleChange}></TextField>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2} direction='row'>
                <Grid item xs={12}>
                  <Box>
                    <TextField
                      label='Ward Name'
                      variant='outlined'
                      fullWidth
                      size='small'
                      name='wardName'
                      value={formik.values.wardName}
                      onChange={formik.handleChange}></TextField>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container spacing={2} direction='row'>
                <Grid item xs={12}>
                  <Box>
                    <TextField
                      label='Beds Available'
                      type='number'
                      fullWidth
                      name='beds'
                      value={formik.values.beds}
                      onChange={formik.handleChange}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction='row-reverse'>
                <Grid item xs={12}>
                  <Box>
                    <Button
                      variant='contained'
                      fullWidth
                      onClick={formik.handleSubmit}>
                      Add
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AddWardDetails;
