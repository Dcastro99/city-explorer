import React from 'react';
import { Container } from 'react-bootstrap';
import Movie from './Movie';
import './Movie.css';

class Movies extends React.Component {
  render() {
    let date = this.props.movieData
      ? new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }).format(this.props.movieData.timestamp)
      : '';
    return (
      <>
        {this.props.movieData ? (
          <>
            <h2>{this.props.cityName} = Top Movies!</h2>
            <small id="timestamp">Movie info from: {date}</small>
            <Container id="movieBox">
              {this.props.movieData.data.map((movie, idx) => (
                <Movie key={idx} movie={movie} />
              ))}
            </Container>
          </>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default Movies;
