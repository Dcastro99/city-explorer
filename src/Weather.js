import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render() {
    return (
      <div id="wbox">
        {this.props.weatherData.map((day, idx) => (
          <ListGroup variant="flush">
            <ListGroup.Item id="weather1" key={idx}>
              {day.description}
            </ListGroup.Item>

            <ListGroup.Item id="weather2"> {day.date}</ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    );
  }
}

export default Weather;
