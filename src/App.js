import React from 'react';
import './App.css';

import Main from './Global/Main';
import Header from './Global/Header';
import Footer from './Global/Footer';

class App extends React.Component {
  render() {
    return (
      <div id="appcon" className="App">
        <Header />

        <Main />

        <Footer />
      </div>
    );
  }
}

export default App;
