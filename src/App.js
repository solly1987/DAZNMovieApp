import React, { Component } from 'react';
import './App.scss';
import {getMovie} from "./modules/getters";
import AppView from "./components/App/View";

class App extends Component {

    constructor() {
        super();

        this.state = {
            movieDescription: {}
        };

        this.setMovieDescription = this.setMovieDescription.bind(this);
    }

    async setMovieDescription(id) {
        try {
            this.setState({
                movieDescription: await getMovie(id)
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <AppView setMovieDescription={this.setMovieDescription}
                     movieDescription={this.state.movieDescription}/>
        )
    }
}

export default App;