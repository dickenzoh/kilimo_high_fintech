import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import StudentsTable from "../../components/Tables/StudentsTable";
const StudentsPage = () => {
  const [studentsData, setStudentsData] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  //   const stream = location.state.streamData;
  //   console.log(stream);
  //const classStreamId = stream._id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3008/students/students`);
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
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography variant="h4" color="black" fontWeight="600">
            Students
          </Typography>
        </Box>
      </Box>
      <StudentsTable studentsData={studentsData} />
    </>
  );
};

export default StudentsPage;
