import React from "react";
import "./bookContainer.css";
import BookContainer from "./BookContainer";

function Saved(){

 return(

    <div className="sectionContainer">
        <h5>Saved Books</h5>
        <BookContainer />
        {/* one BUTTON Is delete though  */}

        {/*
        with our data, map and nested a box  with
        title
        author
        picture
        description
        view button
        delete button
        */}
    </div>
 );

}

export default Saved;