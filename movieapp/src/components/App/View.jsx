import React from "react";
import MovieDescription from "../../containers/MovieDescription";
import Header from "../Header/Header";

/**
 * The main App view.
 */

const AppView = (props) => {
    return (
        <div className="content-wrapper">
            <Header setMovieDescription={props.setMovieDescription}/>
            {Object.keys(props.movieDescription).length !== 0 &&
            <MovieDescription movieDescription={props.movieDescription}/>}
        </div>
    )
};

export default AppView;