import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Input from "../../components/Input/Input";
import useStyles from "./styles";

const initialState = {
  firstName: "",
  lastName: "",
  age: "",
  stream: "",
};

const EditStudent = () => {
  const [formData, setFormData] = useState(initialState);
  const classes = useStyles();

  const streams = [
    {
      value: "Form1A",
      label: "Form 1A",
    },
    {
      value: "Form1B",
      label: "Form 1B",
    },
    {
      value: "Form1C",
      label: "Form 1C",
    },
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5">Edit Student</Typography>
        <form className={classes.form} onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Input
              name="firstName"
              label="First Name"
              handleChange={handleChange}
              autoFocus
              half
            />
            <Input
              name="lastName"
              label="Last Name"
              handleChange={handleChange}
              half
            />
            <Input
              name="age"
              label="Age"
              handleChange={handleChange}
              type="number"
            />
            <TextField
              id="filled-select-currency-native"
              name="stream"
              select
              label="Select Stream"
              defaultValue="Form 1A"
              SelectProps={{
                native: true,
              }}
              helperText="Please select stream"
              onChange={handleChange}
            >
              {streams.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid container justify-content="flex-end">
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default EditStudent;
