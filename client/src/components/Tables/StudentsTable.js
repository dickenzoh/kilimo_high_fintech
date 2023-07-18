import React from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import EditStudentModal from "../Modals/EditStudentModal";
import DeleteStudentModal from "../Modals/DeleteStudentModal";

const StudentsTable = ({ studentsData }) => {
  console.log(studentsData);
  const navigate = useNavigate();

  const handleViewStudent = (student) => {
    navigate("/student", {
      state: { studentData: student },
    });
  };

  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor="primary"
      overflow="auto"
    >
      <TableContainer component={Paper} sx={{ mx: 5, mt: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "green" }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Typography sx={{ color: "white", fontWeight: 500 }}>
                  First Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "white", fontWeight: 500 }}>
                  Second Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "white", fontWeight: 500 }}>
                  Age
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "white", fontWeight: 500 }}>
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsData.map((item, index) => (
              <TableRow
                style={
                  index % 2 === 0
                    ? { background: "grey" }
                    : { background: "white" }
                }
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.secondName}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell style={{ display: "flex", alignItems: "center" }}>
                  <Button
                    onClick={() => handleViewStudent(item)}
                    variant="contained"
                    color="primary"
                    borderRadius="4px"
                    style={{ marginRight: "8px" }}
                  >
                    View
                  </Button>
                  <EditStudentModal />
                  <DeleteStudentModal studentId={item._id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StudentsTable;
