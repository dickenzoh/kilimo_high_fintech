import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Link,
} from "@mui/material";
import useStyles from "./styles.js";

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Company Name
            </Typography>
            <Typography variant="body1">
              A short description about your company goes here. You can provide
              some information about your mission, vision, and values.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" className={classes.footerLink}>
              Home
            </Link>
            <br />
            <Link href="#" className={classes.footerLink}>
              About Us
            </Link>
            <br />
            <Link href="#" className={classes.footerLink}>
              Services
            </Link>
            <br />
            <Link href="#" className={classes.footerLink}>
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1">
              Address: 123 Street, City, Country
              <br />
              Email: contact@example.com
              <br />
              Phone: +1 (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Footer;
