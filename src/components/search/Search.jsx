import React from "react";

function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="flex items-center justify-center w-full">
      <input
        className="px-4 py-2 outline-none border-2 rounded-lg w-4/5 text-2xl mt-1"
        type="text"
        placeholder="Enter City Name"
        name="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="w-32 h-12 rounded-lg mx-2 mt-1 bg-violet-950 text-white"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
