import React from "react";
import "./bookContainer.css";
import BookContainer from "./BookContainer";

function Search() {
  return (
    <div>
      <div className="sectionContainer">
        <h5>Book Search</h5>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Name of book"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>

      <div className="sectionContainer">
        <h5>Results</h5>
        <BookContainer />
      </div>
    </div>
  );
}

export default Search;
