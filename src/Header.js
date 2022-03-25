import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Nav id="nav" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="./">Home</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Header;
