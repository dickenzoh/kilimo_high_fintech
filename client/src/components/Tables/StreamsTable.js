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

const StreamsTable = (streamData) => {
  const navigate = useNavigate();

  const handleViewStream = (stream) => {
    console.log("Streams");
    navigate("/singlestream", {
      state: { streamData: stream },
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
                  Stream Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "white", fontWeight: 500 }}>
                  Number of student
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
            {streamData.streamData.map((item, index) => (
              <TableRow
                style={
                  index % 2 === 0
                    ? { background: "grey" }
                    : { background: "white" }
                }
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.streamname}</TableCell>
                <TableCell>{item.students.length}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleViewStream(item)}
                    variant="contained"
                    color="primary"
                    borderRadius="4px"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StreamsTable;
