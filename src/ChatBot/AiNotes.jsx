
//! Desc: AiNotes.jsx for the ChatBot 
import React, { useState, useEffect } from "react";
import { FaHome, FaStar } from "react-icons/fa";
import "./AiNotes.css";
import SearchBar from "../Components/SearchBar";
import Sort from "../Components/Sort";
import Home from "../Components/Home";
import Favorite from "../Components/Favorite";
import { parse, format } from "date-fns";

const AiNotes = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [notes, setNotes] = useState([]); // Empty notes array initially
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");


  useEffect(() => {
    let sortedNotes = [...notes];

    sortedNotes.sort((a, b) => {

      const dateA = parse(a.date, "MMMM d, yyyy - hh:mm a", new Date());
      const dateB = parse(b.date, "MMMM d, yyyy - hh:mm a", new Date());

      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    setFilteredNotes(sortedNotes);
  }, [notes, sortOrder]);// Runs when notes or sortOrder changes

  const toggleFavorite = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, favorite: !note.favorite } : note
      )
    );
  };

  return (
    <div className="app-container">
      <main className="main">
        <div className="header">
          <img
            src="https://tars-file-upload.s3.amazonaws.com/Nju2fJ/dcf5b19f731653374422e35999a5ba75--Tars-Logo-Gif.gif"
            alt="logo"
          />
          <h3>AI Notes</h3>
        </div>
        <hr />

        <div className="container">
          <div
            className={`nav-item ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            <FaHome className="icon" />
            <span>Home</span>
          </div>
          <div
            className={`nav-item ${activeTab === "favorite" ? "active" : ""}`}
            onClick={() => setActiveTab("favorite")}
          >
            <FaStar className="icon" />
            <span>Favorites</span>
          </div>
        </div>
      </main>

      <section className="content">
        <div className="search-sort">
          <div className="search-bar">
            <SearchBar notes={notes} setFilteredNotes={setFilteredNotes} />
          </div>
          <div className="sort-dropdown">
            <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>
        </div>

        {/* Pass filteredNotes instead of notes */}
        {activeTab === "home" ? (
          <Home notes={filteredNotes} setNotes={setNotes} toggleFavorite={toggleFavorite} />
        ) : (
          <Favorite notes={filteredNotes} setNotes={setNotes} toggleFavorite={toggleFavorite} />
        )}
      </section>
    </div>
  );
};

export default AiNotes;


