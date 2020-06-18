import React from 'react' 
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {Col,Row, Image} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav, Navbar, NavDropdown, Form, FormControl} from "react-bootstrap";
import { NavigationBar } from '../components/NavigationBar';
import { Jumbotron } from '../components/Jumbotron';
import "./drmartinpacheco.css";
import { MPJumbotron } from '../components/drmartinpachecojumbo';
import {Button, form, FormGroup, Label, Input}
      from 'reactstrap';

import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';

import tinImg from '../assets/tinpacheco.png'


export const DrPachecoPage = () => {
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
      <MPJumbotron />
        <form className="drmartinpacheco-profile-form">
            <br/>
        <Container>
            <Row>
            <Col xs={12} sm={8} smOffset={2}>
            <div className="mp-profile1">
            <img src={tinImg} className='profile-pic-mp'/>
            
            <h1>Dr. Martin Pacheco</h1>
        <h4>Ophthalmologist</h4>
        <p>Dr. Martin Pacheco specializes with eyes. He performs surgery in addition to providing medical eye treatment.
         He is an  expert in the diseases, functions and anatomy of the eye. He provides routine care such as vision testing
          and prescribe and fit eyeglasses or contact lenses.</p>
        <br/><br/>
        <h5>Ophthalmologist Surgeon duties and responsibilities</h5>
        <p>•Perform examinations and tests to determine the nature of the patient’s vision problem.</p>
        <p>•If surgery is needed, an ophthalmologist operates on the patient’s eyes, typically with a laser.
            He might remove cataracts, transplant a cornea or correct a patient’s nearsightedness. </p>
        <p>•Establish Treatment Plan.</p>
        <p>•Refer patients for more specialized treatments when conditions exceed the experience,
        expertise, or scope of practice of practitioner.</p>
        <p>•Document or evaluate patients' medical histories.</p>
        <p>•Develop treatment plans based on patients' histories and goals, the nature
            and severity of disorders, and treatment risks and benefits.</p>
        <p>•Perform comprehensive examinations of the visual system to determine the nature or extent of ocular disorders..</p>
        
        </div>
        </Col>

        <Col>
        <div className="mp-copy">
        <h3>Contact Details</h3>
        <p> Email address: drmartinpacheco@mapp.com</p>
        <hr/>
        <p> Contact number: 0934 589 8284</p>
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

export default DrPachecoPage;