import React, { useEffect, useState } from "react";
import StreamsTable from "../../components/Tables/StreamsTable";
import { Box, Typography } from "@mui/material";
import AddStreamModal from "../../components/Modals/AddStreamModal";

const Streams = () => {
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

  return (
    <>
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography variant="h4" color="black" fontWeight="600">
            Streams
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "flex-end",
          color: "primary",
        }}
      >
        <AddStreamModal />
      </Box>
      <StreamsTable streamData={streamData} />
    </>
  );
};

export default Streams;
