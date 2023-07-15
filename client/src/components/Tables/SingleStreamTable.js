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

const SingleStreamTable = (studentData, streamName) => {
  console.log(streamName);

  const navigate = useNavigate();

  const handleViewStudent = (student) => {
    console.log("Stream");
    navigate("/student", {
      state: { studentData: student, streamName: streamName },
    });
  };
  const handleEditStudent = () => {
    console.log("Edit");
  };
  const handleDeleteStudent = () => {
    console.log("Deleted");
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
            {studentData.studentData.map((item, index) => (
              <TableRow
                style={
                  index % 2 === 0
                    ? { background: "grey" }
                    : { background: "white" }
                }
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleViewStudent(item)}
                    variant="contained"
                    color="primary"
                    borderRadius="4px"
                    style={{ marginRight: "8px" }}
                  >
                    View
                  </Button>
                  {/* <Button
                    onClick={() => handleEditStudent(item)}
                    variant="contained"
                    color="success"
                    borderRadius="4px"
                    style={{ marginRight: "8px" }}
                  >
                    Edit
                  </Button> */}
                  <EditStudentModal />
                  {/* <Button
                    onClick={() => handleDeleteStudent(item)}
                    variant="contained"
                    color="error"
                    borderRadius="4px"
                  >
                    Delete
                  </Button> */}
                  <DeleteStudentModal />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SingleStreamTable;
