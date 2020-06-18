import React from 'react' 
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {Col,Row, Image} from "react-bootstrap";
import {Container} from "react-bootstrap";
import { NavigationBar } from '../components/NavigationBar';
import {Nav, Navbar, NavDropdown, Form, FormControl} from "react-bootstrap";
import { Jumbotron } from '../components/Jumbotron';
import "./drdebsgatchon.css";
import { KDJumbotron } from '../components/drkimberlydunojumbo';
import { DEBSJumbotron } from '../components/drdebsgatchonjumbo';



import {Button, form, FormGroup, Label, Input}
      from 'reactstrap';

import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';

import DebsImg from '../assets/debsgatcon.png'


export const DrGatchonPage = () => {
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
      <DEBSJumbotron />
        <form className="drdebbielyngatchon-profile-form">
            <br/>
        <Container>
            <Row>
            <Col xs={12} sm={8} smOffset={2}>
            <div className="dg-profile1">
            <img src={DebsImg} roundedCircle className='profile-pic-dg'/>
            
            <h1>Dr. Debbie-lyn Gatchon</h1>
        <h4>Nephrologist</h4>
        <p>Dr. Debbie-lyn Gatchon is an expert in the diagnosis and treatment of disorders related to the kidneys.
        She focuses on kidneys and the entire renal system of the body. She specializes in the management of patients with
         a wide range of renal disorders which include glomerulonephritis, renal cancer, hydronephrosis, etc.</p>
        <br/>
        <h5>Nephrologist duties and responsibilities</h5>
        <p>•Conducting consultations to diagnose illnesses. </p>
        <p>•Evaluating kidneys to determine treatment.</p>
        <p>•Referring patients to surgeons.</p>
        <p>•Treating and managing conditions.</p>
        <p>•Recommending dialysis. </p>
        <p>•Administering medication.</p>
        
        </div>
        </Col>

        <Col>
        <div className="dg-copy">
        <h3>Contact Details</h3>
        <p> Email address: drdebsgatchon@mapp.com</p>
        <hr/>
        <p> Contact number: 0969 420 1540</p>
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

export default DrGatchonPage;