import PropTypes from "prop-types";
import React from "react";
import MovieImage from "../components/MovieDescription/MovieImage";
import MovieInfo from "../components/MovieDescription/MovieInfo";

/*** Shows the Movie description ***/

const MovieDescription = (props) => {

    const {
        title, genres, status, runtime, revenue, budget,
        overview, release_date, production_companies } = props.movieDescription;

    return (
        <main className="movie-description">
            <MovieImage
                title={title}
                posterPath={props.movieDescription.poster_path}/>

            <MovieInfo
                title={title}
                genres={genres}
                status={status}
                runtime={runtime}
                revenue={revenue}
                budget={budget}
                overview={overview}
                releaseDate={release_date}
                productionCompanies={production_companies}/>
        </main>
    )
};

MovieDescription.propTypes = {
    movieDescription: PropTypes.object.isRequired
};

export default MovieDescription;