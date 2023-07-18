import React from "react";
import { AppBar } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { Box, Button } from "@mui/material";

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const pages = ["Students", "Streams", "Register"];

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Link to={{ pathname: "/" }}>Kilimo High School</Link>
      </div>
      <Box className={classes.links}>
        {pages.map((page) => (
          <Link key={page} to={{ pathname: `/${page.toLowerCase()}` }}>
            {page}
          </Link>
        ))}
      </Box>
    </AppBar>
  );
};

export default Navbar;
