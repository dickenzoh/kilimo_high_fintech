import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useLocation } from "react-router-dom";
import EditStudent from "../Form/EditStudent/EditeStudent";
import AddStream from "../Form/AddStream/AddStream";

const AddStreamModal = ({ student, handleUpdateStudent }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="primary"
        borderRadius="4px"
        style={{ marginRight: "8px" }}
      >
        Add
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <AddStream handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddStreamModal;
