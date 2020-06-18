import React from 'react' 
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import { NavigationBar } from '../components/NavigationBar';
import { Jumbotron } from '../components/Jumbotron';
import DoctorsImg from '../assets/carousel4.png'
import Slider from "react-slick";
import "./homepage.css";
import ClockIMG from '../assets/clock.png'
import CallIMG from '../assets/call.png'
import MapIMG from '../assets/map.png'

import {Grid, Row, Col, Image, Button, Dropdown, DropdownButton, OverlayTrigger, Tooltip, Alert, Card, Navbar, Nav, NavDropdown, Form, FormControl, CardDeck} from "react-bootstrap";

export const HomePage = () => {
  return (
    <div className="Homeflex">
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
        <Jumbotron />

        <div className="cardBG">
        <br/>
        <div className="cardDeck">
          <Row>

         <CardDeck>   
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ClockIMG} />
  <Card.Body>
    <Card.Title><h3 className="cards">OPENING HOURS</h3></Card.Title>
      <Card.Footer>
      <h5 className="cards">Monday to Sunday</h5>
      <h5 className="cards">8:30am-8:00pm</h5>
    </Card.Footer>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={CallIMG} />
  <Card.Body>
    <Card.Title><h3 className="cards">CONTACT US</h3></Card.Title>
      <Card.Footer>
      <h5 className="cards">89132425</h5>
      <h6 className="cards">or</h6>
      <h5 className="cards">89132426</h5>
    </Card.Footer>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={MapIMG} />
  <Card.Body>
    <Card.Title><h3 className="cards">OUR LOCATION</h3></Card.Title>
      <Card.Footer>
      <h5 className="cards">123 Jupiter Street Makati City, Philippines</h5>
      
    </Card.Footer>
  </Card.Body>
</Card>
<Image className="image" src={DoctorsImg}/>
</CardDeck>
{' '}

</Row>
</div>

        <br/>
        </div>


        
        </div>
  );
  
};

export default HomePage;