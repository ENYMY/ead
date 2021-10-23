import {
  Box,
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { NavLink, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  nav: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
    "& li": {
      marginLeft: "1.5rem",
      fontSize: "1.25rem",
      textDecoration: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "20px",
  },
  active: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#000000",
  },
}));
const Navigation = () => {
  const classes = useStyles();
  const history = useHistory();
  const homeHandler = () => {
    history.push("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }} color='primary'>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Grid container direction='row' alignItems='center'>
            <Grid item xs={2}>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={homeHandler}>
                <LocalHospitalIcon />
              </IconButton>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <ul className={classes.nav}>
                  <li>
                    <NavLink
                      className={classes.link}
                      to='/patient'
                      activeClassName={classes.active}>
                      <Typography variant='button'>Patient</Typography>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={classes.link}
                      to='/doctor'
                      activeClassName={classes.active}>
                      <Typography variant='button'>Doctor</Typography>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={classes.link}
                      to='/ward'
                      activeClassName={classes.active}>
                      <Typography variant='button'> Ward</Typography>
                    </NavLink>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
