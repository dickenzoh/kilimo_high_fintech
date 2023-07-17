import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import useStyles from "./styles";

const initialState = {
  firstName: "",
  lastName: "",
  age: "",
  stream: "",
};

const Register = () => {
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

  const [streamData, setData] = useState([]);

  console.log(streamData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3008/streams/class-streams"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3008/students/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          age: formData.age,
          classStreamId: formData.stream,
        }),
      });

      if (response.ok) {
        // Handle success, e.g., display a success message or redirect
      } else {
        console.error("Error registering student:", response.statusText);
        // Handle error, e.g., display an error message
      }
    } catch (error) {
      console.error("Error registering student:", error);
      // Handle error, e.g., display an error message
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5">Register Student</Typography>
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
              {streamData.map((option) => (
                <option key={option.name} value={option._id}>
                  {option.name}
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
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
