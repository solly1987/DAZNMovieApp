import React from "react";
/**
 * Image for the movie
 */

const MovieImage = (props) => {

    //Destructuring props
    const {title, posterPath} = props;

    return (
        <div className="movie-poster">
            <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${posterPath}`}
                className="poster"
                alt={`Movie poster of ${title}`}/>
        </div>
    )
};

export default MovieImage;