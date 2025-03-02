
//! Home.js Component
import React from "react";
import Notes from "./Notes";

const Home = ({ notes, setNotes }) => {
  return <Notes notes={notes} setNotes={setNotes} />;
};

export default Home;
