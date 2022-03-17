import axios from 'axios';
import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import CityForm from './CityForm';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationObj: {},
    };
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.handleChange}&format=json`;
    const locationResponse = await axios.get(url);
    this.setState({ locationObj: locationResponse.data[0] });
  };

  nameSearch = (event) => {
    return event.taget.value;
  };
  render() {
    return (
      <Container className="App">
        <Header />
        <CityForm nameSearch={this.nameSearch} getLocation={this.getLocation} />

        <Main />
        <Footer />
      </Container>
    );
  }
}

export default App;
