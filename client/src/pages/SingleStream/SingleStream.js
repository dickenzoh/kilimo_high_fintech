import React, { useEffect, useState } from "react";
import SingleStreamTable from "../../components/Tables/SingleStreamTable";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const SingleStream = () => {
  const [data, setData] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const stream = location.state.streamData;
  console.log(stream);
  const classStreamId = stream._id;
  const streamName = stream.streamname;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3008/students/students/class-stream/${classStreamId}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

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
            {stream.name}
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      <SingleStreamTable studentData={data} />
    </>
  );
};

export default SingleStream;
