import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

class Movie extends React.Component {
  render() {
    return (
      <>
        {this.props.movieData ? (
          <Container id="movieBox">
            {this.props.movieData.map((movie, idx) => (
              <Card className="animalCard" style={{ width: '18rem' }}>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Img
                  variant="top"
                  src={movie.image_url}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Text>{movie.overview}</Card.Text>
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
