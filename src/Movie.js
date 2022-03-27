import React from 'react';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {
  render() {
    return (
      <Card
        className="movieCard"
        style={{ width: '25rem' }}
        key={this.props.idx}
      >
        <Card.Title id="cardTitle">{this.props.movie.title} </Card.Title>
        <Card.Img
          variant="top"
          src={this.props.movie.image_url}
          alt={this.props.movie.title}
        />
        <Card.Body id="cardBody">
          <Card.Text id="overview" style={{ height: '12rem' }}>
            {this.props.movie.overview}
          </Card.Text>
          <Card.Text id="movieInfo">
            Avg Votes= {this.props.movie.average_votes}
          </Card.Text>
          <Card.Text id="movieInfo">
            Total Votes= {this.props.movie.total_votes}
          </Card.Text>
          <Card.Text id="movieInfo">
            {' '}
            Popularity Lvl= {this.props.movie.popularity}
          </Card.Text>
          <Card.Text>{this.props.movie.release_on}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Movie;
