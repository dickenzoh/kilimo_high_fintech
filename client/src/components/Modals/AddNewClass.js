import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import { Alert } from "@mui/material";
import Input from "../Input/Input";
import CustomizedSnackbars from "../SnackBar/CustomizedSnackbar";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  spacing: 4,
};

const AddClassModal = () => {
  const [open, setOpen] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [error, setError] = useState("");
  const [streamData, setStreamData] = useState();

  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        setShowSnackBar(true);
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

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackBar(false);
  };

  const handleChange = (e) => {
    setStreamData({ ...streamData, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <CustomizedSnackbars
        showSnackBar={showSnackBar}
        handleSnackbarClose={handleSnackbarClose}
        text="Class Stream Added Successfully"
        severity="success"
      />
      <Button onClick={handleOpen} variant="contained">
        Set a new class
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              sx={{ marginBottom: 2 }}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Set up a new class stream
            </Typography>
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
            <Input
              name="name"
              label="Class Stream"
              handleChange={handleChange}
              autoFocus
            />
            <Button
              sx={{ ml: 24, mt: 2 }}
              onClick={handleCreateStream}
              variant="contained"
            >
              Save
            </Button>
            <Button
              sx={{ ml: 4, mt: 2 }}
              onClick={handleClose}
              variant="contained"
            >
              Cancel
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default AddClassModal;
