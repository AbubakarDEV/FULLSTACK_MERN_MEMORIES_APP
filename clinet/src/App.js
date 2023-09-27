import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";

import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/Auth/Auth";
import TestPage from "./Components/Test";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="auth" element={<SignUp />} />
          <Route path="test" element={<TestPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
