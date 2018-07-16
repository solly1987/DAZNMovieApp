import PropTypes from "prop-types";
import React from "react";

/**
 * Information about the movie.
 */

const MovieInfo = (props) => {

    const {title, genres, overview, releaseDate, productionCompanies,
        runtime, budget, revenue} = props;

    return (
        <div className="description-wrapper">
            <h1 className="title">{title}</h1>
            
            <div className="item">
                <strong>Release Date:</strong>
                <p className="release-date">
                    {releaseDate}
                </p>
            </div>
            <div className="item">
                <strong>Description:</strong>
                <p>{overview}</p>
            </div>
            <div className="item">
                <strong>Genre:</strong>
                <p className="genre">
                    {genres
                        .map(genre => genre.name)
                        .join(", ")}
                </p>
            </div>
            <div className="item">
                <strong>Runtime:</strong>
                <p className="runtime">
                    {runtime} mins
                </p>
            </div>
            <div className="item">
                <strong>Production company:</strong>
                <p className="production">
                    {productionCompanies
                        .map(company => company.name)
                        .join(", ")}
                </p>
            </div>
            <div className="item">
                <strong>Budget to make the film:</strong>
                <p className="budget">
                    {budget > 0 ? budget.toLocaleString() : "Unknown"}
                </p>
            </div>
            <div className="item">
                <strong>Total Revenue:</strong>
                <p className="revenue">
                    {revenue > 0 ? revenue.toLocaleString() : "Unknown"}
                </p>
            </div>
        </div>
    )
};

/** PropTypes */
MovieInfo.propTypes = {
    title: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    productionCompanies: PropTypes.array.isRequired,
    runtime: PropTypes.string,
    budget: PropTypes.string,
    revenue: PropTypes.string
};

export default MovieInfo;