import React from 'react' 
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {Col,Row, Image, Jumbotron as Jumbo} from "react-bootstrap";
import {Container, Dropdown, SplitButton, ButtonGroup, DropdownButton, Card, Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";
import { NavigationBar } from '../components/NavigationBar';
import { Jumbotron } from '../components/Jumbotron';
import { MFJumbotron } from '../components/myprofileJumbo';
import "./contacts.css";
import {Button, form, FormGroup, Label, Input}
      from 'reactstrap';

import styled from 'styled-components';
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';

import jedImg from '../assets/jed.jpg'
import bgImage from '../assets/bgImage.jpeg'
 

export const MyProfilePage = () => {
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
      Signed in as: <Link>Christian Jed Laurilla (client)</Link>
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
      <MFJumbotron />

        <form className="userjedlaurilla-profile-form"><br/>
        <Row>
        <div className="jl-profile1-sidebar">
          <br/>
          <Link><h3>• General Information</h3></Link><hr/>
          <Link><h3>• Privacy Settings</h3></Link><hr/>
          <Link><h3>• Activity Log</h3></Link><hr/>
          <Link><h3>• Payment Methods</h3></Link><hr/>
          <Link><h3>• Update Profile Picture</h3></Link>
          <br/>
          </div>
            <br/>
        <Container>
          
            <Row>
            <Col xs={12} sm={8} smOffset={2}>
            <div className="jl-profile1">
            <Col xs={12} sm={4} className="person-wrapper">
            <Image src={jedImg} roundedCircle className="profile-pic-jl"/>
            </Col>
            <h1>Christian Jed Laurilla</h1>
        <h4>Client ID: 24188</h4>
        <br/><br/><br/><br/>
        
        <h5>CONTACT INFORMATION</h5><hr/>
        <h5>Contact number: 0937 411 8204</h5>
        <h5>Email address: christianjedlaurilla@gmail.com</h5>
        <br/><h5>BASIC INFORMATION</h5><hr/>
        <h5>Address: Marikina City, Philippines.</h5>
        <h5>Gender: Male</h5>
        <h5>Birthdate: June 28, 1999</h5>
        <br/>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
        <Button size='lg' variant="outline-dark">Edit Contact Information</Button>
        </div>
        </div>
        </Col>
        </Row>
        </Container>
        
        
        </Row>
        <br/>
        </form>
        
        </div>

  );
  
};

export default MyProfilePage;