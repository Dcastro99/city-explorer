import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import CityForm from './CityForm';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <Container id="Appcon" className="App">
        <Header />

        <Main />
        <CityForm />
        <Footer />
      </Container>
    );
  }
}

export default App;
