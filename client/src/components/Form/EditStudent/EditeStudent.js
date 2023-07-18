import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Input from "../../Input/Input";
import useStyles from "./styles";

const initialState = {
  firstName: "",
  lastName: "",
  age: "",
  stream: "",
};

const EditStudent = ({ student, handleClose, handleUpdateStudent }) => {
  const [updatedData, setUpdatedData] = useState(student);
  const [streamData, setStreamData] = useState([]);
  const classes = useStyles();

  const handleEditStudent = async (e) => {
    e.preventDefault();
    const id = updatedData._id;
    try {
      const response = await fetch(
        `http://localhost:3008/students/students/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: updatedData.firstName,
            secondName: updatedData.secondName,
            age: updatedData.age,
            classStreamId: updatedData.stream,
          }),
        }
      );

      if (response.ok) {
        console.log("Student updated successfully!");
        handleClose();
        handleUpdateStudent(updatedData);
      } else {
        console.error("Error updating student:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
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

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5">Edit Student</Typography>
        <form className={classes.form} onSubmit={handleEditStudent}>
          <Grid container spacing={2}>
            <Input
              name="firstName"
              value={updatedData.firstName}
              handleChange={handleChange}
              autoFocus
              half
            />
            <Input
              name="secondName"
              value={updatedData.secondName}
              handleChange={handleChange}
              half
            />
            <Input
              name="age"
              value={updatedData.age}
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
