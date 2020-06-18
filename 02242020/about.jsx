import React from 'react' 
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import { NavigationBar } from '../components/NavigationBar';
import { Jumbotron } from '../components/Jumbotron';
import "./about.css";
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";

export const AboutPage = () => {
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
      Signed in as: <Link>Christian Jed Laurilla {' '}<h9>(client)</h9></Link>
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
        <form className="about-form">
          <br/>
          <div className="about-components">
        <h1 classname="text-center">Medical Appointment (M.APP)</h1>
        <p>Medical Appointment (M.app) is a clinic that can help busy person to lessen the interaction with the medical personnel via book online
          and there, they can  already answer the possible question  from their  medical document like medical history,  physical characteristic,
          and avoid long lines. Assure that there is available doctor that can check them, so they don’t waste their time. Time is gold, we value
          our client’s time and satisfy their needs.</p>
        
        <hr/>
        <h2>Mission</h2>
        <p>We are committed to deliver and to render servicers that will satisfy our dear clients.</p>
        <hr/>
        <h2>Vision</h2>
        <p>Medical Appointment (M.APP) is recognized as the delivery of health-related-services.</p>
        <h2></h2>
        
        </div>
        <br/>
        </form>
        </div>
  );
  
};

export default AboutPage;