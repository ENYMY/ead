import React, { useState } from "react";
import { Grid, TextField, Box, Button, IconButton } from "@mui/material";
import { useFormik } from "formik";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";

function WardDetails(props) {
  const [isEdit, setIsEdit] = useState(true);
  const { ward } = props;
  const formik = useFormik({
    initialValues: ward,
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
                name='wardNumber'
                label='Ward Number'
                value={formik.values.wardNumber}
                onChange={formik.handleChange}
                disabled={isEdit}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <TextField
                name='wardName'
                label='Ward Name'
                value={formik.values.wardName}
                onChange={formik.handleChange}
                disabled={isEdit}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <TextField
                name='maxBeds'
                label='Beds'
                value={formik.values.maxBeds}
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

export default WardDetails;
