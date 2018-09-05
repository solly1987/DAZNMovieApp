import PropTypes from "prop-types";
import React from "react";
import SearchBar from "../../containers/SearchBar";

/**
 * Header component
 */

const Header = (props) => {
    return (
        <header className="header">
            <h1>
                Movie Search
            </h1>

            <div className="search-wrapper">
                <SearchBar
                    setMovieDescription={props.setMovieDescription}/>
            </div>
        </header>
    )
};

/** PropTypes */
Header.propTypes = {
    setMovieDescription: PropTypes.func.isRequired
};

export default Header;