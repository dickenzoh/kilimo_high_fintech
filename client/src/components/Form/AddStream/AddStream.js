import React, { useState } from "react";
import {
  Alert,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Input from "../../Input/Input";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const AddStream = ({ handleClose }) => {
  const [streamData, setStreamData] = useState();
  const [error, setError] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();

  const clear = () => {
    setStreamData({
      name: "",
    });
  };

  const handleCreateStream = async (e) => {
    e.preventDefault();

    try {
      // Fetch the list of existing class names from the server
      const response = await fetch(
        "http://localhost:3008/streams/class-streams"
      );
      const existingStreams = await response.json();

      // Check if the entered class name already exists
      const isClassNameExists = existingStreams.some(
        (stream) => stream.name === streamData.name
      );

      if (isClassNameExists) {
        setError("Class name already exists.");
        console.error("Class name already exists.");
        return;
      }

      // Class name is unique, proceed to create the stream
      const createResponse = await fetch(
        "http://localhost:3008/streams/class-streams",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: streamData.name,
          }),
        }
      );

      if (createResponse.ok) {
        clear();
        navigate("/streams");
        handleClose();
      } else {
        console.error(
          "Error creating class stream:",
          createResponse.statusText
        );
      }
    } catch (error) {
      console.error("Error creating class stream:", error);
    }
  };

  const handleChange = (e) => {
    setStreamData({ ...streamData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5">Create Class Stream</Typography>
        {error && (
          <Alert
            onClose={() => {
              setError("");
            }}
            severity="warning"
          >
            {error}
          </Alert>
        )}
        <form className={classes.form} onSubmit={handleCreateStream}>
          <Grid container spacing={2}>
            <Input
              className={classes.field}
              name="name"
              label="Stream Name"
              handleChange={handleChange}
              autoFocus
            />
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
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AddStream;
