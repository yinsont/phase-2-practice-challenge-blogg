import React from "react";

function Header({ search, handleSearch }) {
  return (
    <div>
      <header className="logo">
        <h1>the bLOGg</h1>

        {/* This is the search box */}
        <input
          value={search}
          onChange={ (e) => handleSearch(e.target.value)}
          style={{
            width: "500px",
            height: "20px",
            borderRadius: "15px",
            border: "none",
            backgroundColor: "rgb(88, 204, 208)",
            padding: "10px",
            color: "white",
          }}
          placeholder="Search an article or the author"
          type="text"
        ></input>
      </header>
    </div>
  );
}

export default Header;
