import React from 'react' 
import {Grid, Row, Col, Image, Button, Card, Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

import edwardImg from '../assets/edwardenejosa.JPG'
import czarinaImg from '../assets/czarcamua.png'
import tinImg from '../assets/tinpacheco.png'
import debsImg from '../assets/debsgatcon.png'
import kimImg from '../assets/kimdunno.png'
import irishImg from '../assets/irishfran.png'
import "./ourdoctors.css";

import { NavigationBar } from '../components/NavigationBar';
import { ODJumbotron } from '../components/ourdoctorsjumbo';

export const OurDoctorsPage = () => {
  return (
    <div>
        <Navbar className="navColor" expand="lg">
  <Navbar.Brand href="#home">Medical Appointment</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/BookAppointment">Book Appointment</Nav.Link>
      <Nav.Link href="/ViewBookings">View Appointments</Nav.Link>
      <Nav.Link href="/OurDoctors">Our Doctors</Nav.Link>
      <Nav.Link href="/About">About</Nav.Link>
      
    </Nav>
    <Navbar.Text>
      Signed in as: <Link>Christian Jed Laurilla{' '}<h9>(client)</h9></Link>
    </Navbar.Text>
    <NavDropdown title="My Account" id="basic-nav-dropdown">
        <NavDropdown.Item href="MyProfile">Profile</NavDropdown.Item>
        <NavDropdown.Item href="/Settings">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="Login">Logout</NavDropdown.Item>
      </NavDropdown>
    
    <Form inline>      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-secondary">Search</Button>
    </Form>
    
  </Navbar.Collapse>

</Navbar>
        <ODJumbotron />
        
        <form className="about-form">
        <br/>
        <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
            <Image src={edwardImg} roundedCircle className="profile-pic"/>
            <Link to ="/DrEdwardEnejosa"><h3>Dr. Edward Enejosa</h3></Link>
            <p>Surgeon, Cardiologist</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
            <Image src={czarinaImg} roundedCircle className="profile-pic"/>
            <Link to ="/DrCzarinaCamua"><h3>Dr. Czarina Camua</h3></Link>
            <p>Pediatric Surgeon</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
            <Image src={tinImg} roundedCircle className="profile-pic"/>
            <Link to ="/DrMartinPacheco"><h3>Dr. Martin Pacheco</h3></Link>
            <p>Ophthalmologist</p>
            </Col>
        </Row>

        <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
            <Image src={irishImg} roundedCircle className="profile-pic"/>
            <Link to ="/DrIrishJoyceFran"><h3>Dr. Irish Joyce Fran</h3></Link>
            <p>Obstetrician</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
            <Image src={kimImg} roundedCircle className="profile-pic"/>
            <Link to ="/DrKimberlyDuno"><h3>Dr. Kimberly Duno</h3></Link>
            <p>Neurologist</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
            <Image src={debsImg} roundedCircle className="profile-pic"/>
            <Link to ="/DrDebbie-lynGatchon"><h3>Dr. Debbie-lyn Gatchon</h3></Link>
            <p>Nephrologist</p>
            </Col>
        </Row>
        </form>

        </div>
  );
  
};

export default OurDoctorsPage;