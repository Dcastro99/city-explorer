import React from 'react';
import { Container } from 'react-bootstrap';
import Movie from './Movie';
import './Movie.css';

class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.movieData ? (
          <Container id="movieBox">
            {this.props.movieData.map((movie, idx) => (
              <Movie movie={movie} ide={idx} />
            ))}
          </Container>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default Movies;
