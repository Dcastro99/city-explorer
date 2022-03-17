import { Button } from 'bootstrap';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'React-bootstrap/Form';

class CityForm extends React.Component {
  render() {
    return (
      <>
        <Container id="cityform">
          <Form>
            <Form.Label>
              <Form.Select
                id="select"
                onChange={(event) => this.props.handleChange(event)}
                placeholder="Find a City!"
              ></Form.Select>
              <Button>Explore!</Button>
            </Form.Label>
          </Form>
        </Container>
      </>
    );
  }
}

export default CityForm;
