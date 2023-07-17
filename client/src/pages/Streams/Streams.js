import React, { useEffect, useState } from "react";
import StreamsTable from "../../components/Tables/StreamsTable";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Streams = () => {
  const navigate = useNavigate();
  const [streamData, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3008/streams/class-streams"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(streamData);

  return (
    <>
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography variant="h4" color="black" fontWeight="600">
            Streams
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      <StreamsTable streamData={streamData} />
    </>
  );
};

export default Streams;
