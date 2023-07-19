import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useLocation } from "react-router-dom";
import EditStudent from "../Form/EditStudent/EditeStudent";
import { Box } from "@mui/material";
import CustomizedSnackbars from "../SnackBar/CustomizedSnackbar";

export default function EditStudentModal({ student, handleUpdateStudent }) {
  const [open, setOpen] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        text="Student Edited Successfully"
        severity="success"
      />
      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="success"
        borderRadius="4px"
        style={{ marginRight: "8px" }}
      >
        Edit
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <>
            <EditStudent
              student={student}
              handleClose={handleClose}
              handleUpdateStudent={handleUpdateStudent}
            />
          </>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
