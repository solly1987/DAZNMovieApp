import PropTypes from "prop-types";
import React, {Component} from "react";
import {debounce} from "throttle-debounce"
import SearchBarAutocomplete from "../components/SearchBar/SearchBarAutocomplete";
import {getMoviesList} from "../modules/getters";
import {handleChange} from "../modules/handlers";

/*** Search bar ***/

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchKeyWord: "",
            suggestionsList: {}
        };

        this.setMovieSuggestionsList = debounce(500, this.setMovieSuggestionsList).bind(this);
        this.handleChange = handleChange.bind(this);
    }

    /*** get movie list on component update ***/
    componentDidUpdate(nextProps, nextState) {
        this.setMovieSuggestionsList(nextState.searchKeyWord, response => {
            this.setState({
                suggestionsList: response
            })
        });
    }

    /*** set movie list ***/
    async setMovieSuggestionsList(searchKeyWord, callback) {
        let data = await getMoviesList(searchKeyWord);

        try {
            callback(data);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="search-wrapper">
                <input type="text"
                    id="searchKeyWord"
                    value={this.state.searchKeyWord}
                    className="search-input"
                    placeholder="What movie are you looking for??"
                    searchKeyWord={this.state.searchKeyWord}
                    onChange={this.handleChange} />
                <i className="fa fa-search btn" 
                    aria-hidden="true" 
                    onClick={this.handleChange} />
                {Object.keys(this.state.suggestionsList).length > 0 &&
                this.state.searchKeyWord &&
                <SearchBarAutocomplete
                    handleChange={this.handleChange}
                    setMovieDescription={this.props.setMovieDescription}
                    suggestionsList={this.state.suggestionsList}/>}
            </div>
        )
    }
}

SearchBar.propTypes = {
    setMovieDescription: PropTypes.func.isRequired
};

export default SearchBar;