import React from 'react';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
  render() {
    return (
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="./">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1"></Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2"></Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Header;
