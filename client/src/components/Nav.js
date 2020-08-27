import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul class="nav">
        <li class="nav-item">
          <a className="navbar-brand" href="/">
            Google Books
          </a>
        </li>

        <li class="nav-item">
          <a className="navbar-brand" href="/search">
            Search
          </a>
        </li>
        <li class="nav-item">
          <a className="navbar-brand" href="/saved">
            Saved
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
