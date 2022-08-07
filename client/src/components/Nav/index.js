import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row ">
          <li className="flex mx-1 space-around">
            <Link to="/orderHistory">
               ORDER HISTORY
            </Link>
          </li>
          <li className=" flex mx-1 space-around">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              LOGOUT
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row ">
          <li className="mx-2 ">
            <Link to="/signup">
              REGISTER
            </Link>
          </li>
          <li className="mx-2 ">
            <Link to="/login">
              MEMBER
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1 space-between">
      <div>
        <h5>
          <Link to="/">THE BAZAAR</Link>
        </h5>

        {<h7 className= "px-1">
          See what the world has to offer.
        </h7>}
      </div>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
