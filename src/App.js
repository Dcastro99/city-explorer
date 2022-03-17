import React from 'react';
import './App.css';
import CityForm from './CityForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationObj: {},
    };
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.handleChange}&format=json`;
  };

  handleChange = (event) => {
    return event.taget.value;
  };
  render() {
    return (
      <div className="App">
        <CityForm handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
