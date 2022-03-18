import React from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import CityForm from './CityForm';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationObj: {},
      cityName: '',
      locationMap: '',
    };
  }

  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.cityName}&format=json`;
    const locationResponse = await axios.get(url);
    this.setState({ locationObj: locationResponse.data[0] });
  };

  nameSearch = (event) => {
    this.setState({ cityName: event.target.value });
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
          <Card.Img
            variant="top"
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&size=600x600&zoom=10.5`}
            alt=""
          />
          <Card.Body>
            <Card.Text>{this.state.locationObj.display_name}</Card.Text>
            <Card.Text>{this.state.locationObj.lat}</Card.Text>
            <Card.Text>{this.state.locationObj.lon}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Main;
