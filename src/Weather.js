import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Weather.css';

class Weather extends React.Component {
  render() {
    return (
      <div id="wbox">
        {this.props.weatherData &&
          this.props.weatherData.map((day, idx) => (
            <ListGroup variant="flush" key={idx}>
              <ListGroup.Item id="weather1">{day.description}</ListGroup.Item>

              <ListGroup.Item id="weather2"> {day.date}</ListGroup.Item>
            </ListGroup>
          ))}
      </div>
    );
  }
}

export default Weather;
