import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Divider, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

export default function DeleteStudentModal(props) {
  const [open, setOpen] = React.useState(false);

  const location = useLocation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3008/students/students/${props.studentId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        handleClose();
        // Handle success, e.g., display a success message or update the student list
      } else {
        console.error("Error deleting student:", response.statusText);
        // Handle error, e.g., display an error message
      }
    } catch (error) {
      console.error("Error deleting student:", error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <Box>
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
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <>
            <Typography style={{ fontWeight: "bold" }}>
              Are you sure to delete the student?
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
