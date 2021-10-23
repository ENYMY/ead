import React from "react";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import { addDoctor } from "../../services/doctor-service";

const initialValues = {
  firstName: "",
  lastName: "",
  age: "",
  contactNumber: "",
  number: "",
  street: "",
  city: "",
  description: "",
};

const AddDoctor = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      addDoctor({
        firstName: values.firstName,
        lastName: values.lastName,
        age: values.age,
        contactNumber: values.contactNumber,
        address: `${values.number},${values.street} ${values.city}`,
        description: values.description,
      });
    },
  });
  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Box sx={{ margin: "10px" }}>
          <Grid container spacing={2} direction='column'>
            <Grid item>
              <Box>
                <Typography variant='h5'>Add Doctor Information </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Grid container spacing={2} direction='row'>
                <Grid item xs={6}>
                  <Box>
                    <TextField
                      label='First Name'
                      variant='outlined'
                      fullWidth
                      size='small'
                      name='firstName'
                      value={formik.values.firstName}
                      onChange={formik.handleChange}></TextField>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <TextField
                      label='Last Name'
                      variant='outlined'
                      fullWidth
                      size='small'
                      name='lastName'
                      value={formik.values.lastName}
                      onChange={formik.handleChange}></TextField>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2} direction='row'>
                <Grid item xs={6}>
                  <Box>
                    <TextField
                      label='Age'
                      variant='outlined'
                      fullWidth
                      size='small'
                      name='age'
                      value={formik.values.age}
                      onChange={formik.handleChange}></TextField>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <TextField
                      label='Contact Number'
                      variant='outlined'
                      fullWidth
                      size='small'
                      name='contactNumber'
                      value={formik.values.contactNumber}
                      onChange={formik.handleChange}></TextField>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* Address */}
            <Grid item>
              <Grid container spacing={2} direction='row'>
                <Grid item xs={2}>
                  <Box>
                    <TextField
                      label='No'
                      variant='outlined'
                      fullWidth
                      size='small'
                      name='number'
                      value={formik.values.number}
                      onChange={formik.handleChange}></TextField>
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box>
                    <TextField
                      label='Street'
                      variant='outlined'
                      fullWidth
                      size='small'
                      name='street'
                      value={formik.values.street}
                      onChange={formik.handleChange}></TextField>
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box>
                    <TextField
                      label='City / Town'
                      variant='outlined'
                      fullWidth
                      size='small'
                      name='city'
                      value={formik.values.city}
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
                      label='Description'
                      multiline
                      rows={2}
                      fullWidth
                      name='description'
                      value={formik.values.description}
                      onChange={formik.handleChange}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction='row-reverse'>
                <Grid item>
                  <Box sx={{ width: "175px" }}>
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
};

export default AddDoctor;
