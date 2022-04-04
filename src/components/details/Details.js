import React, { Fragment, useEffect, useState } from "react";
import { api_url } from "../../constants/index";
import { useParams, Link } from "react-router-dom";

const Details = () => {
  const [doneFetch, setDoneFetch] = useState();
  const [character, setCharacter] = useState({
    image: "",
    name: "",
    status: "",
    species: "",
    gender: "",
  });
  const { id } = useParams();

  useEffect(() => {
    getOneCharacter();
  }, []);

  const getOneCharacter = () => {
    fetch(`${api_url}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDoneFetch(true);
        setCharacter(data);
      });
  };

  return (
    <Fragment className="container">
      {doneFetch ? (
        <table class="table table-dark table-hover container w-50">
          <thead>
            <tr>
              <th scope="col">Character</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Specie</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={character.image} alt="api" />
              </td>
              <td>{character.name}</td>
              <td>{character.status}</td>
              <td>{character.species}</td>
              <td>{character.gender}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <button class="btn btn-dark text-nowrap" type="button">
          <span class="spinner-border spinner-border-sm mr-2"></span>
          Loading data...
        </button>
      )}
    </Fragment>
  );
};

export default Details;
