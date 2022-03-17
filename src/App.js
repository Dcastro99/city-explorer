import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationOgj: {},
    };
  }
  render() {
    return (
      <div className="App">
        <input
          onChange={(event) =>
            this.setState({ searchQuery: event.target.value })
          }
          placeholder="Find a city"
        ></input>
        <button>Go</button>
      </div>
    );
  }
}

export default App;
