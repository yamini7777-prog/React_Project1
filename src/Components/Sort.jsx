
//! Sort.jsx component for the AiNotes
import React from "react";
import { FaSort } from "react-icons/fa";
import "../ChatBot/AiNotes.css";

const Sort = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="sort-dropdown">
      <FaSort className="sort-icon" />
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="newest">Sort: Newest</option>
        <option value="oldest">Sort: Oldest</option>
      </select>
    </div>
  );
};

export default Sort;
