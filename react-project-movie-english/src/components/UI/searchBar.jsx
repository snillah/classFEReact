import React, { useState } from "react";

function SearchBar({ onSearch, initialSearchQuery = "" }) {
  const [query, setQuery] = useState("");

  const submit = (event) => {
    event.preventDefault();
    onSearch(query);
  };
  return (
    <from onSubmit={submit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "200px" }}
      />
    </from>
  );
}
export default SearchBar;
