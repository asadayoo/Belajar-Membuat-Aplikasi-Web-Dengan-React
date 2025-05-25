import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, keywordchange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Cari berdasarkan nama"
      value={keyword}
      onChange={(event) => keywordchange(event.target.value)}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordchange: PropTypes.func.isRequired,
};

export default SearchBar;
