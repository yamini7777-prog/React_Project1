
//! Search.jsx component for the AiNotes
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";


const SearchBar = ({ notes, setFilteredNotes }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter notes by title or text
    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.text.toLowerCase().includes(query)
    );

    setFilteredNotes(filtered);
  };

  return (
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
