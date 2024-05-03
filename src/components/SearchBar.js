import React from "react";

function SearchBar({ onChange }) {
    return (
        <input
        className="search-bar"
            type="text"
            placeholder="Search by description"
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default SearchBar;