import React from 'react';

import './Weather.css';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    return (
      <div id="wbox">
        {this.props.weatherData &&
          this.props.weatherData.map((day, idx) => (
            <WeatherDay day={day} idx={idx} />
          ))}
      </div>
    );
  }
}

export default Weather;
