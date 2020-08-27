import React from "react";
import "./bookContainer.css";

function BookContainer() {
  return (
    <div className="bookContainer">
      <div className="row">
        <div className="col-8">
          <h6>Title</h6>
          <h7>Written by</h7>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary">
            View
          </button>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>

      <div className="row resultImg">
        <div className="col-2">
          <img
            src="./blini.jpeg"
            alt="random picture"
            className="img-thumbnail"
          />
        </div>
        <div className="col">
          <p>
            Lorizzle ipsizzle dolor break it down amizzle, we gonna chung
            adipiscing for sure. Nullizzle sapien velit, brizzle volutpizzle,
            suscipit quis, gravida vizzle, arcu. Pellentesque bling bling
            bizzle. Sed erizzle. Ma nizzle izzle yo mamma dapibus turpis
            tempizzle cool. Maurizzle things dope yo mamma fo shizzle. Stuff
            izzle tortor. Pellentesque shizzlin dizzle break yo neck, yall
            that's the shizzle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookContainer;
