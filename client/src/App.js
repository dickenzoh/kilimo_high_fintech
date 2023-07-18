import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Streams from "./pages/Streams/Streams";
import SingleStream from "./pages/SingleStream/SingleStream";
import SingleStudentPage from "./pages/SingleStudentPage/SingleStudentPage";
import Navbar from "./components/Navbar/Navbar";
import StudentsPage from "./pages/Students/StudentsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Register />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/streams" exact element={<Streams />} />
          <Route path="/singlestream" exact element={<SingleStream />} />
          <Route path="/student" exact element={<SingleStudentPage />} />
          <Route path="/students" exact element={<StudentsPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
