import React from 'react' 
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {Col,Row, Image, Nav, Navbar, NavDropdown, Form, FormControl} from "react-bootstrap";
import {Container} from "react-bootstrap";
import { NavigationBar } from '../components/NavigationBar';
import { Jumbotron } from '../components/Jumbotron';
import "./drczarinacamua.css";
import { CCJumbotron } from '../components/drczarinacamuajumbo';
import {Button, form, FormGroup, Label, Input}
      from 'reactstrap';

import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';

import czarImg from '../assets/czarcamua.png'


export const DrCamuaPage = () => {
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
      <CCJumbotron />
        <form className="drczarinacamua-profile-form">
            <br/>
        <Container>
            <Row>
            <Col xs={12} sm={8} smOffset={2}>
            <div className="cc-profile1">
            <img src={czarImg} className='profile-pic-cc'/>
            
            <h1>Dr. Czarina Camua</h1>
        <h4>Pediatric Surgeon</h4>
        <p>Dr. Czarina Camua is specially trained to perform various operative procedures on children and young adults.
        Dr. Czarina Camua can diagnose and provide operative care for a variety of illnesses, diseases,
        and health conditions in young patients.</p>
        <br/><br/>
        <h5>Pediatric Surgeon duties and responsibilities</h5>
        <p>•Examining young patients and diagnosing health issues for surgery. </p>
        <p>•Ordering preoperative tests and physical examinations and interpreting results. </p>
        <p>•Consulting with patients and family members regarding diagnosis and treatment options.</p>
        <p>•Comforting young patients before operations.</p>
        <p>•Performing surgical procedures to correct deformations, congenital problems, injuries, or treat illnesses.</p>
        <p>•Monitoring postoperative recovery and educating family members regarding postoperative care.</p>
        <p>•Collaborating and cooperating with all the specialists involved in a child's medical
            care to determine when or if surgery is an appropriate treatment option.</p>
        
        </div>
        </Col>

        <Col>
        <div className="cc-copy">
        <h3>Contact Details</h3>
        <p> Email address: drczarinacamua@mapp.com</p>
        <hr/>
        <p> Contact number: 0939 724 2569</p>
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

export default DrCamuaPage;