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
  console.log(location.pathname);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log("deleted");
    handleClose();
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
