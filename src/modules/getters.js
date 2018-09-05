import {ApiConfig} from "./config"

/**
 * Gets a list of matching movie propositions.
 */
export function getMoviesList(keyWord) {
    return fetch(`${ApiConfig.BASE_URL}/search/movie?api_key=${ApiConfig.KEY}&query=${keyWord}`)
        .then(response => response.json())
}

/**
 * Gets details about single movie from TMDb.
 */
export function getMovie(id) {
    return fetch(`${ApiConfig.BASE_URL}/movie/${id}?api_key=${ApiConfig.KEY}&language=en-US`)
        .then(response => response.json())
}