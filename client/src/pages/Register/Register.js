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
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  secondName: "",
  age: "",
  stream: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [streamData, setStreamData] = useState([]);

  const classes = useStyles();
  const navigate = useNavigate();

  const clear = () => {
    //setCurrentId(null);
    setFormData({
      firstName: "",
      secondName: "",
      age: "",
      stream: "",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3008/streams/class-streams"
        );
        const jsonData = await response.json();
        setStreamData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3008/students/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          secondName: formData.secondName,
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
    clear();
    navigate("/students");
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
              value={formData?.firstName}
              handleChange={handleChange}
              autoFocus
              half
            />
            <Input
              name="secondName"
              label="Second Name"
              value={formData?.secondName}
              handleChange={handleChange}
              half
            />
            <Input
              name="age"
              label="Age"
              value={formData?.age}
              handleChange={handleChange}
              type="number"
            />
            <TextField
              id="filled-select-currency-native"
              name="stream"
              value={formData?.stream}
              select
              SelectProps={{
                native: true,
              }}
              helperText="Please select stream"
              onChange={handleChange}
            >
              {streamData.map((option) => (
                <option key={option._id} value={option._id}>
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
