import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Weather.css';

class WeatherDay extends React.Component {
  render() {
    return (
      <ListGroup variant="flush" key={this.props.idx}>
        <ListGroup.Item id="weather1">
          {this.props.day.description}
        </ListGroup.Item>

        <ListGroup.Item id="weather2"> {this.props.day.date}</ListGroup.Item>
      </ListGroup>
    );
  }
}

export default WeatherDay;
