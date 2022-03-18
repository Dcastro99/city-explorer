import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CityForm extends React.Component {
  render() {
    return (
      <>
        <Container id="cityform">
          <Form onSubmit={this.props.getLocation}>
            <Form.Group className="mb-3">
              <Form.Label>
                <Form.Control
                  type="text"
                  id="select"
                  onChange={this.props.nameSearch}
                  placeholder="Find a City!"
                />
                <Button id="cardButton" type="submit">
                  Explore!
                </Button>
              </Form.Label>
            </Form.Group>
          </Form>
        </Container>
      </>
    );
  }
}

export default CityForm;
