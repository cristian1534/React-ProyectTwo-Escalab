import React, { createContext, useEffect, useState } from "react";
import { api_url } from "../constants/index";
import { useParams } from "react-router-dom";

export const CharactersContext = createContext();

const CharactersContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setDoneFetch(true);
        setCharacters(data.results);
      });
  };

  return (
    <CharactersContext.Provider value={{ doneFetch, characters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
