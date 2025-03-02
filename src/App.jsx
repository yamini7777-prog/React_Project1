//! /src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import AiNotes from "./ChatBot/AiNotes";
import Context from "./Components/Context/Context";

const App = () => {
  return (
    <Context>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/register" element={<Register />} />,
          <Route path="/login" element={<Login />} />,
          <Route path="/ainotes" element={<AiNotes />} />,
        </Routes>
      </Router>
    </Context>
  );
};

export default App;
