import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';

import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <Container id="appcon" className="App">
        <Header />

        <Main />

        <Footer />
      </Container>
    );
  }
}

export default App;
