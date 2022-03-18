import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationObj: {},
      cityName: '',
      locationMap: {},
    };
  }

  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.cityName}&format=json`;
    const locationResponse = await axios.get(url);
    this.setState({ locationObj: locationResponse.data[0] });
  };

  getMap = async (event) => {
    event.preventDefault();
    const url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&size=600x600&zoom=14`;
    const locationMapRes = await axios.get(url);
    this.setState({ locationMap: locationMapRes });
  };

  nameSearch = (event) => {
    this.setState({ cityName: event.target.value });
  };
  render() {
    return (
      <>
        <Container id="cityform">
          <Form onSubmit={this.getLocation && this.getMap}>
            <Form.Group className="mb-3">
              <Form.Label>
                <Form.Control
                  type="text"
                  id="select"
                  onChange={this.nameSearch}
                  placeholder="Find a City!"
                />
                <Button type="submit">Explore!</Button>
              </Form.Label>
            </Form.Group>
          </Form>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.state.locationMap} alt="" />
            <Card.Body>
              <Card.Title>MAP</Card.Title>
              <Card.Text>{this.state.locationObj.display_name}</Card.Text>
              <Card.Text>{this.state.locationObj.lat}</Card.Text>
              <Card.Text>{this.state.locationObj.lon}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default CityForm;
