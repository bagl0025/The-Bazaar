import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row space-between">
          <li className="flex mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className=" flex mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-2">
            <Link to="/signup">
              Signup free!
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <div>
        <h2>
          <Link to="/">The Bazaar</Link>
        </h2>

        <h6>
          See what the world has to offer.
        </h6>
      </div>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
