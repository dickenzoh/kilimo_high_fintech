import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import StudentsTable from "../../components/Tables/StudentsTable";
const StudentsPage = () => {
  const [studentsData, setStudentsData] = useState([]);

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
        const response = await fetch(`http://localhost:3008/students/students`);
        const data = await response.json();
        setStudentsData(data.reverse());
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
      <StudentsTable
        studentsData={studentsData}
        setStudentsData={setStudentsData}
        handleUpdateStudent={handleUpdateStudent}
      />
    </>
  );
};

export default StudentsPage;
