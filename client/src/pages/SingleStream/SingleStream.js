import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import StudentsTable from "../../components/Tables/StudentsTable";

const SingleStream = () => {
  const [studentsData, setStudentsData] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const stream = location.state.streamData;
  const classStreamId = stream._id;
  const streamName = stream.streamname;

  const handleUpdateStudent = (updatedStudent) => {
    setStudentsData((prevStudents) =>
      prevStudents.map((student) =>
        student._id === updatedStudent._id ? updatedStudent : student
      )
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3008/students/students/class-stream/${classStreamId}`
        );
        const data = await response.json();
        setStudentsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
      <StudentsTable
        studentsData={studentsData}
        setStudentsData={setStudentsData}
        handleUpdateStudent={handleUpdateStudent}
      />
    </>
  );
};

export default SingleStream;
