import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import EditStudent from "../Form/EditeStudent";

export default function EditStudentModal(props) {
  const [open, setOpen] = React.useState(false);

  const location = useLocation();

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
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <>
            <EditStudent />
          </>
        </DialogContent>
      </Dialog>
    </div>
  );
}
