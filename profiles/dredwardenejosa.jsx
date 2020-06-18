import React from 'react' 
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {Col,Row, Image, Jumbotron as Jumbo} from "react-bootstrap";
import {Nav, Navbar, NavDropdown, Form, FormControl} from "react-bootstrap";
import {Container} from "react-bootstrap";
import { NavigationBar } from '../components/NavigationBar';
import { Jumbotron } from '../components/Jumbotron';
import { EEJumbotron } from '../components/dredwardenejosajumbo';
import "./dredwardenejosa.css";
import {Button, form, FormGroup, Label, Input}
      from 'reactstrap';

import styled from 'styled-components';
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';

import edwardImg from '../assets/edwardenejosa.png'
import bgImage from '../assets/bgImage.jpeg'


export const DrEnejosaPage = () => {
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
      <EEJumbotron />
        <form className="dredwardenejosa-profile-form">
            <br/>
        <Container>
            <Row>
            <Col xs={12} sm={8} smOffset={2}>
            <div className="ee-profile1">
            <img src={edwardImg}  className='profile-pic-ee'/>
            
            <h1>Dr. Edward Enejosa</h1>
        <h4>Surgeon, Cardiologist</h4>
        <p>Doctor Edward Enejosa are specialized in diagnosing, treating and preventing diseases that mainly affect the heart and blood vessels.
        Cardiologists usually work with a range of patients, from babies and young infants through to the elderly.</p>
        <br/><br/>
        <h5>Cardiologist duties and responsibilities</h5>
        <p>•Examine patients and assess their condition </p>
        <p>•Explain the risks of prohibited activities to patients </p>
        <p>•Give health advice to patients </p>
        <p>•Write proper prescriptions to treat chronic cardiovascular diseases </p>
        <p>•Diagnose and evaluate patients with heart-related conditions </p>
        <p>•Perform surgical procedures on patients with heart-related conditions </p>
        <p>•Measure and track the improvement of patients' health </p>
        <p>•Oversee and educate student residents </p>
        <p>•Command laboratory research  </p>
        <p>•Ensure adherence to relevant laws and regulations </p>
        </div>
        </Col>

        <Col>
        <div className="ee-copy">
        <h3>Contact Details</h3>
        <p> Email address: dredwardenejosa@mapp.com</p>
        <hr/>
        <p> Contact number: 0945 690 9395</p>
        <hr/>
     <FormGroup>
       <Link to="/BookAppointment"><Button className= "btn-lg btn-dark btn-block">
        Schedule an APPointment
       </Button></Link>
       
     </FormGroup>
        </div>
            </Col>
            </Row>
        </Container>
        <br/>
        </form>
        </div>

  );
  
};

export default DrEnejosaPage;