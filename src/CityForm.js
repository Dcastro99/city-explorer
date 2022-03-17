import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CityForm extends React.Component {
  render() {
    return (
      <>
        <Container id="cityform">
          <p>Hello</p>
          <Form>
            <Form.Label>
              <Form.Control
                id="select"
                onChange={(event) => this.props.nameSearch(event)}
                placeholder="Find a City!"
              />
              <Button onClick={() => this.props.getLoaction}>Explore!</Button>
            </Form.Label>
          </Form>
        </Container>
      </>
    );
  }
}

export default CityForm;
