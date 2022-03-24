import React from "react";
import { useState, useEffect } from "react";
import wikipedia from "../data/wikipedia";
import SearchBar from "../components/SearchBar";
import ListComponent from "../components/ListComponent";

const Search = () => {
  const [searchItems, setSearchItems] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState("hello");

  console.log(searchItems);

  const handleSearchTerm = (term) => {
    console.log(term);
    setSearchedTerm(term);
  };

  useEffect(() => {
    const getWikipediaData = async () => {
      const response = wikipedia
        .get("", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: searchedTerm,
          },
        })
        .then((data) => {
          setSearchItems(data.data.query.search);
        });
    };

    //Delayed Request
    if (searchedTerm && !searchItems.length) {
      getWikipediaData();
    } else {
      const timeoutId = setTimeout(() => {
        if (searchedTerm) {
          getWikipediaData();
        }
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [searchedTerm]);

  return (
    <div>
      <SearchBar handleSearchTerm={handleSearchTerm} />
      <ListComponent searchItems={searchItems} />
    </div>
  );
};

export default Search;
