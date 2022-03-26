import React from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import CityForm from './CityForm';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Weather from './Weather';
import Movie from './Movie';
import './Main.css';
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
      movieData: null,
    };
  }

  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.cityName}&format=json`;
    this.setState({ locationObj: null });
    try {
      this.setState({
        error: false,
        errorType: '',
        errorStatus: '',
      });
      const locationResponse = await axios.get(url);
      this.setState({ locationObj: locationResponse.data[0] });
      await this.getWeather();
      await this.getMovie();
    } catch (error) {
      this.setState({
        error: true,
        errorType: error.response.data.error
          ? error.response.data.error
          : error.response.data.weatherError,
        errorStatus: error.response.status,
      });
    }
  };

  getWeather = async () => {
    this.setState({ weatherData: null });
    const weatherResults = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.locationObj.lat}&lon=${this.state.locationObj.lon}&searchQuery=${this.state.cityName}`;
    const weatherResponse = await axios.get(weatherResults);
    this.setState({ weatherData: weatherResponse.data });
  };

  getMovie = async () => {
    this.setState({ movieData: null });
    const movieResults = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.cityName}`;
    const movieResponse = await axios.get(movieResults);
    console.log(movieResponse);
    this.setState({ movieData: movieResponse.data });
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

          <Weather weatherData={this.state.weatherData} />

          {this.state.locationObj ? (
            <Card.Body>
              <Row>
                <Col id="mapPic">
                  <Card.Img
                    variant="top"
                    src={
                      this.state.locationObj
                        ? `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=10.5`
                        : ''
                    }
                    alt=""
                  />
                </Col>
                <Col id="col2">
                  <Card.Text>{this.state.locationObj.display_name}</Card.Text>
                  <hr></hr>
                  <Card.Text>{this.state.locationObj.lat}</Card.Text>
                  <Card.Text>{this.state.locationObj.lon}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          ) : (
            ''
          )}
        </Card>

        <Movie movieData={this.state.movieData} />
      </>
    );
  }
}

export default Main;
