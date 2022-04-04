import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-light bg-light container m-5">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              src="https://elvortex.com/wp-content/uploads/2019/06/Rick-and-morty-season-4.jpg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-center m-2 rounded"
            />
            <b>PROYECTO REACT ESCALAB</b>
          </Link>
          <div>
            <Link to="/">
              <button type="button" class="btn btn-dark m-2">
                Home
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
