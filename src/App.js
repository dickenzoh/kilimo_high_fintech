import React, { useContext, useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register/Register";
import Streams from "./pages/Streams/Streams";
import SingleStream from "./pages/SingleStream/SingleStream";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" exact element={<Register />} />
          <Route path="/streams" exact element={<Streams />} />
          <Route path="/singlestream" exact element={<SingleStream />} />
          <Route path="*" exact element={<PageNotfound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
