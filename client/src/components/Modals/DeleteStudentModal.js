import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Box, DialogContent, Typography } from "@mui/material";
import CustomizedSnackbars from "../SnackBar/CustomizedSnackbar";

export default function DeleteStudentModal({
  studentId,
  studentsData,
  setStudentsData,
}) {
  const [open, setOpen] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3008/students/students/${studentId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setStudentsData(
          studentsData.filter((student) => student._id != studentId)
        );
        setShowSnackBar(true);
      } else {
        console.error("Error deleting student:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackBar(false);
  };

  return (
    <Box>
      <CustomizedSnackbars
        showSnackBar={showSnackBar}
        handleSnackbarClose={handleSnackbarClose}
        text="Student Deleted Successfully"
        severity="success"
      />
      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="error"
        borderRadius="4px"
      >
        Delete
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <>
            <Typography style={{ fontWeight: "bold" }}>
              Are you sure to delete the student ?
            </Typography>
            <Box
              sx={{ mt: 5, display: "flex", justifyContent: "space-around" }}
            >
              <Button onClick={handleClose} variant="contained">
                Cancel
              </Button>
              <Button onClick={handleDelete} variant="contained" color="error">
                Delete
              </Button>
            </Box>
          </>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
