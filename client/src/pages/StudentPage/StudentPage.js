import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const StudentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const student = location.state.studentData;
  const state = location.state;

  return (
    <>
      <Box sx={{ mt: 5, display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          variant="contained"
        >
          Back
        </Button>
        <Box>
          <Typography variant="h4" color="black" fontWeight="600">
            Student Details
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ height: "100vh", mt: "auto" }}
      >
        <Grid item>
          <div>
            <p>First Name: {student.firstName}</p>
            <p>Last Name: {student.lastName}</p>
            <p>Age: {student.age}</p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default StudentPage;
