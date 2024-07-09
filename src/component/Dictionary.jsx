import React, { useState } from "react";

let words = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

const Dictionary = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [filteredMeaning, setFilteredMeaning] = useState("");

  let handleSearch = (e) => {
    let { value } = e.target;
    setSearchValue(value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setIsSearch(true);
    const meaning = words.find((item) => {
      return item.word.toLowerCase() === searchValue.toLowerCase();
    });
    setFilteredMeaning(meaning);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a word..."
          name="searchValue"
          value={searchValue}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      <h4>Definition:</h4>
      {isSearch &&
        (filteredMeaning ? (
          <p>{filteredMeaning.meaning}</p>
        ) : (
          <p>Word not found in the dictionary.</p>
        ))}
    </div>
  );
};

export default Dictionary;
