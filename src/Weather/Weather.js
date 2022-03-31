import React from 'react';

import './Weather.css';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    let date = this.props.weatherData
      ? new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }).format(this.props.weatherData.timestamp)
      : '';
    return (
      <>
        {this.props.weatherData ? (
          <>
            <h1>7 Day Forecast</h1>
            <small id="timestamp">Weather info from: {date}</small>
            <div id="wbox">
              {this.props.weatherData.data.map((day, idx) => (
                <WeatherDay day={day} key={idx} />
              ))}
            </div>
          </>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default Weather;
