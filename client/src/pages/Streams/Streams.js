import React from "react";
import StreamsTable from "../../components/Tables/StreamsTable";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Streams = () => {
  const navigate = useNavigate();
  const streamData = [
    {
      id: 0,
      streamname: "Form 1A",
      students: [
        {
          id: 0,
          firstName: "John",
          lastName: "Doe",
          age: 31,
        },
        {
          id: 1,
          firstName: "Jane",
          lastName: "Smith",
          age: 29,
        },
        {
          id: 2,
          firstName: "Michael",
          lastName: "Johnson",
          age: 32,
        },
        {
          id: 3,
          firstName: "Sarah",
          lastName: "Williams",
          age: 28,
        },
        {
          id: 4,
          firstName: "David",
          lastName: "Brown",
          age: 30,
        },
        {
          id: 5,
          firstName: "Emily",
          lastName: "Jones",
          age: 29,
        },
        {
          id: 6,
          firstName: "Daniel",
          lastName: "Davis",
          age: 31,
        },
        {
          id: 7,
          firstName: "Olivia",
          lastName: "Miller",
          age: 30,
        },
        {
          id: 8,
          firstName: "Jacob",
          lastName: "Wilson",
          age: 32,
        },
        {
          id: 9,
          firstName: "Sophia",
          lastName: "Taylor",
          age: 28,
        },
      ],
    },
    {
      id: 1,
      streamname: "Form 1B",
      students: [
        {
          id: 0,
          firstName: "John",
          lastName: "Doe",
          age: 31,
        },
        {
          id: 1,
          firstName: "Jane",
          lastName: "Smith",
          age: 29,
        },
        {
          id: 2,
          firstName: "Michael",
          lastName: "Johnson",
          age: 32,
        },
        {
          id: 3,
          firstName: "Sarah",
          lastName: "Williams",
          age: 28,
        },
        {
          id: 4,
          firstName: "David",
          lastName: "Brown",
          age: 30,
        },
        {
          id: 5,
          firstName: "Emily",
          lastName: "Jones",
          age: 29,
        },
        {
          id: 6,
          firstName: "Daniel",
          lastName: "Davis",
          age: 31,
        },
        {
          id: 7,
          firstName: "Olivia",
          lastName: "Miller",
          age: 30,
        },
        {
          id: 8,
          firstName: "Jacob",
          lastName: "Wilson",
          age: 32,
        },
        {
          id: 9,
          firstName: "Sophia",
          lastName: "Taylor",
          age: 28,
        },
      ],
    },
    {
      id: 2,
      streamname: "Form 1C",
      students: [
        {
          id: 0,
          firstName: "John",
          lastName: "Doe",
          age: 31,
        },
        {
          id: 1,
          firstName: "Jane",
          lastName: "Smith",
          age: 29,
        },
        {
          id: 2,
          firstName: "Michael",
          lastName: "Johnson",
          age: 32,
        },
        {
          id: 3,
          firstName: "Sarah",
          lastName: "Williams",
          age: 28,
        },
        {
          id: 4,
          firstName: "David",
          lastName: "Brown",
          age: 30,
        },
        {
          id: 5,
          firstName: "Emily",
          lastName: "Jones",
          age: 29,
        },
        {
          id: 6,
          firstName: "Daniel",
          lastName: "Davis",
          age: 31,
        },
        {
          id: 7,
          firstName: "Olivia",
          lastName: "Miller",
          age: 30,
        },
        {
          id: 8,
          firstName: "Jacob",
          lastName: "Wilson",
          age: 32,
        },
        {
          id: 9,
          firstName: "Sophia",
          lastName: "Taylor",
          age: 28,
        },
      ],
    },
  ];

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
