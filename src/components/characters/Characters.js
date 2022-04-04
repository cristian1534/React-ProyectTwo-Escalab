import React, { Fragment, useContext } from "react";
import { CharactersContext } from "../../context/CharactersContext";
import { Link } from "react-router-dom";

const Characters = () => {
  const { characters } = useContext(CharactersContext);

  return (
    <Fragment>
      {characters.map((ch) => (
        <table class="table table-dark table-hover container w-50" key={ch.id}>
          <thead>
            <tr>
              <th scope="col">Character</th>
              <th scope="col">Name</th>
              <th scope="col">Specie</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <img src={ch.image} alt="api" />
              </th>
              <td>{ch.name}</td>
              <td>{ch.species}</td>
              <td>
                <Link to={`details/${ch.id}`}>
                  <button type="button" class="btn btn-info m-2">
                    Details
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </Fragment>
  );
};

export default Characters;
