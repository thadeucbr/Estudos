import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return this.props.movies.map((movie) => (
      <MovieCard movie={movie} key={movie.title} />
    ));
  }
}
MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
export default MovieList;
