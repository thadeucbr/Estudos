import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.searchUpdateState = this.searchUpdateState.bind(this);
    this.filter = this.filter.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  // filter e onClick foram feitos pelo Vinicius Muniz, tirados do seguinte PR:
  // https://github.com/tryber/sd-07-project-movie-card-library-stateful/pull/88/commits/77d55ca3faadadb6a8bdb058f4c5366201e68150
  onClick(newMovie) {
    const { movies } = this.state;
    const joined = movies.concat(newMovie);
    this.setState({ movies: joined });
  }

  filter(allMovies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return allMovies.filter(
      (movie) => (bookmarkedOnly === true ? movie.bookmarked === true : true)
        && (selectedGenre === '' ? true : movie.genre === selectedGenre)
        && (searchText === ''
          ? true
          : movie.title.toLowerCase().includes(searchText.toLowerCase())
            || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
            || movie.storyline.toLowerCase().includes(searchText.toLowerCase())),
    );
  }

  searchUpdateState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.searchUpdateState}
          onBookmarkedChange={this.searchUpdateState}
          onSelectedGenreChange={this.searchUpdateState}
        />
        <MovieList movies={this.filter(movies)} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}
MovieLibrary.propTypes = { movies: PropTypes.arrayOf(Object).isRequired };

export default MovieLibrary;
