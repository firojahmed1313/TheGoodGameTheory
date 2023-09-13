import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from '../header/Header';
import './nav.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { NavLink } from 'react-router-dom';

function Navber() {
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary -mt-2">
      <Container className="imgs">
        <Navbar.Brand href="/">TheGoodGameTheory</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav" >
            <Header/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navber;