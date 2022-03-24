import React from "react";
import { useState } from "react";

const SearchBar = ({ handleSearchTerm }) => {
  const [term, setTerm] = useState("");
  handleSearchTerm(term);

  return (
    <div>
      <input type="text" onChange={(e) => setTerm(e.target.value)} />
    </div>
  );
};

export default SearchBar;
