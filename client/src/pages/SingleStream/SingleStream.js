import React from "react";
import SingleStreamTable from "../../components/Tables/SingleStreamTable";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const SingleStream = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const stream = location.state.streamData;
  const streamName = stream.streamname;

  return (
    <>
      <Box sx={{ mt: 5, display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          variant="contained"
        >
          Back
        </Button>
        <Box>
          <Typography variant="h4" color="black" fontWeight="600">
            {streamName}
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      <SingleStreamTable studentData={stream.students} />
    </>
  );
};

export default SingleStream;
