import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleState = this.handleState.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  saveMovie(event) {
    event.preventDefault();
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">
            Título
            <input
              name="title"
              type="text"
              data-testid="title-input"
              value={title}
              onChange={this.handleState}
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo
            <input
              type="text"
              value={subtitle}
              name="subtitle"
              data-testid="subtitle-input"
              onChange={this.handleState}
            />
          </label>
          <label data-testid="image-input-label" htmlFor="imagePath">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              value={imagePath}
              name="imagePath"
              onChange={this.handleState}
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            <textarea
              value={storyline}
              data-testid="storyline-input"
              name="storyline"
              onChange={this.handleState}
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação
            <input
              type="number"
              value={rating}
              data-testid="rating-input"
              onChange={this.handleState}
              name="rating"
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              value={genre}
              data-testid="genre-input"
              onChange={this.handleState}
              name="genre"
            >
              <option value="action" data-testid="genre-option">
                Ação
              </option>
              <option value="comedy" data-testid="genre-option">
                Comédia
              </option>
              <option value="thriller" data-testid="genre-option">
                Suspense
              </option>
            </select>
          </label>
          <button
            type="submit"
            data-testid="send-button"
            onClick={this.saveMovie}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
