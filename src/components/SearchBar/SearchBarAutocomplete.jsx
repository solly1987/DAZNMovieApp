import PropTypes from "prop-types";
import React from "react";
import SearchBarAutocompleteMovieInfo from "./SearchBarAutocompleteMovieInfo";

/**
 * Autocomplete list.
 */

const SearchBarAutocomplete = (props) => {
    return (
        <div className="autocomplete">
            {props.suggestionsList.results ?
                props.suggestionsList.results
                    .splice(0, 10)
                    .map((movie, index) =>
                        <SearchBarAutocompleteMovieInfo
                            handleChange={props.handleChange}
                            setMovieDescription={props.setMovieDescription}
                            movie={movie}
                            key={index}/>) : ""}
        </div>
    )
};

/** PropTypes */
SearchBarAutocomplete.propTypes = {
    suggestionsList: PropTypes.object.isRequired,
    setMovieDescription: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SearchBarAutocomplete;