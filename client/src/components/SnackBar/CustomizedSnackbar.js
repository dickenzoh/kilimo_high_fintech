import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Box } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbars = ({
  showSnackBar,
  handleSnackbarClose,
  text,
  severity,
}) => {
  return (
    <Box>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        sx={{ width: "80%" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          variant="filled"
          severity={severity}
          sx={{ width: "100%" }}
        >
          {text}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CustomizedSnackbars;
