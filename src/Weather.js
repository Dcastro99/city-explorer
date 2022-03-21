import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render() {
    // const weatherDay = ['Monday', 'Tuesday', 'Wednesday'];
    // weatherDay.forEach('');

    return (
      <div id="wbox">
        {this.props.weatherData.map((day) => (
          <ListGroup variant="flush">
            <ListGroup.Item id="weather1" key={day.date}>
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
