import PropTypes from "prop-types";
import React from "react";

/*** Each item in the auto complete list ***/

const SearchBarAutocompleteMovieInfo = (props) => {

    const {id, title, release_date} = props.movie;

    const handleMovieSelect = () => {
        props.handleChange({
            target: {
                value: "",
                id: "searchKeyWord"
            }
        });

        //Set description
        props.setMovieDescription(id);
    };

    return (
        <div
            className="autocomplete-item"
            onClick={handleMovieSelect}>

            <div className="autocomplete-content">
                <h2>
                    {title}&nbsp;
                    <span className="release-name">
                        ({release_date.split("-")[0]})
                    </span>
                </h2>
            </div>
        </div>
    )
};

/** PropTypes */
SearchBarAutocompleteMovieInfo.propTypes = {
    movie: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    setMovieDescription: PropTypes.func.isRequired
};

export default SearchBarAutocompleteMovieInfo;