import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import './Movie.css';

class Movie extends React.Component {
  render() {
    return (
      <>
        {this.props.movieData ? (
          <Container id="movieBox">
            {this.props.movieData.map((movie, idx) => (
              <Card className="movieCard" style={{ width: '18rem' }} key={idx}>
                <Card.Title id="cardTitle">{movie.title} </Card.Title>
                <Card.Img
                  variant="top"
                  src={movie.image_url}
                  alt={movie.title}
                />
                <Card.Body id="cardBody">
                  <Card.Text>{movie.overview}</Card.Text>
                  <Card.Text id="movieInfo">
                    Avg Votes= {movie.average_votes}
                  </Card.Text>
                  <Card.Text id="movieInfo">
                    Total Votes= {movie.total_votes}
                  </Card.Text>
                  <Card.Text id="movieInfo">
                    {' '}
                    Popularity Lvl= {movie.popularity}
                  </Card.Text>
                  <Card.Text>{movie.release_on}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Container>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default Movie;
