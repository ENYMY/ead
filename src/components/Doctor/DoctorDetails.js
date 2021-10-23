import React, { useState } from "react";
import { Grid, TextField, Box, Button, IconButton } from "@mui/material";
import { useFormik } from "formik";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";

function DoctorDetails(props) {
  const { doctor } = props;
  const [isEdit, setIsEdit] = useState(true);

  const formik = useFormik({
    initialValues: doctor,
  });

  const editHandler = () => {
    setIsEdit(false);
  };
  const doneHandler = () => {
    setIsEdit(true);
  };
  const deleteHandler = () => {};
  return (
    <Grid item>
      <Box sx={{ margin: "15px" }}>
        <Grid container direction='row' spacing={1}>
          <Grid item xs={2}>
            <Box>
              <TextField
                name='firstName'
                label='First Name'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                disabled={isEdit}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <TextField
                name='lastName'
                label='Last Name'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                disabled={isEdit}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <TextField
                name='age'
                label='Age'
                value={formik.values.age}
                onChange={formik.handleChange}
                disabled={isEdit}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <TextField
                name='contactNumber'
                label='Contact Number'
                value={formik.values.contactNumber}
                onChange={formik.handleChange}
                disabled={isEdit}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            {isEdit ? (
              <Box>
                <IconButton onClick={editHandler}>
                  <ModeEditOutlinedIcon />
                </IconButton>
              </Box>
            ) : (
              <Box>
                <IconButton onClick={doneHandler}>
                  <DoneOutlineOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </Grid>
          <Grid item xs={2}>
            <Box>
              <IconButton onClick={deleteHandler}>
                <DeleteOutlinedIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default DoctorDetails;
