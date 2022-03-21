import React from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import CityForm from './CityForm';
import Alert from 'react-bootstrap/Alert';
import Weather from './Weather';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationObj: null,
      cityName: '',
      locationMap: '',
      error: false,
      errorType: '',
      errorStatus: '',
      weatherData: null,
    };
  }

  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.cityName}&format=json`;
    try {
      this.setState({
        error: false,
        errorType: '',
        errorStatus: '',
      });
      const locationResponse = await axios.get(url);
      this.setState({ locationObj: locationResponse.data[0] });
      const weatherResults = `http://localhost:3001/weather?searchQuery=${this.state.cityName}`;

      const weatherResponse = await axios.get(weatherResults);
      this.setState({ weatherData: weatherResponse });
    } catch (error) {
      this.setState({
        error: true,
        errorType: 'What happend!?!?',
        errorStatus: error.response.status,
      });
    }
  };

  nameSearch = (event) => {
    this.setState({ cityName: event.target.value });
  };

  hide = () => {
    this.setState({ error: false });
  };

  render() {
    return (
      <>
        <Card id="mapCard" style={{ width: '35rem' }}>
          <>
            <CityForm
              getLocation={this.getLocation}
              nameSearch={this.nameSearch}
            />
          </>
          <>
            {this.state.error ? (
              <Alert variant="danger" onClose={() => this.hide()} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                  status: {this.state.errorStatus} - {this.state.errorType}
                </p>
              </Alert>
            ) : (
              ''
            )}
          </>
          {this.state.weatherData ? (
            <Weather weatherData={this.state.weatherData.data} />
          ) : (
            ''
          )}
          <Card.Img
            variant="top"
            src={
              this.state.locationObj
                ? `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=10.5`
                : ''
            }
            alt=""
          />
          {this.state.locationObj ? (
            <Card.Body>
              <Card.Text>{this.state.locationObj.display_name}</Card.Text>
              <Card.Text>{this.state.locationObj.lat}</Card.Text>
              <Card.Text>{this.state.locationObj.lon}</Card.Text>
            </Card.Body>
          ) : (
            ''
          )}
        </Card>
      </>
    );
  }
}

export default Main;
