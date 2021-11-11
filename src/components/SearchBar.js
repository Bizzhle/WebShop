import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar(props) {
  return (
    <div className="searchbar">
      <div className="searchbar_button">
        <AiOutlineSearch style={{ height: 20, width: 20 }} />
      </div>
      <input type="text" placeholder="search..." />
    </div>
  );
}
