import React from 'react' 
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {Col,Row, Image} from "react-bootstrap";
import {Container} from "react-bootstrap";
import { NavigationBar } from '../components/NavigationBar';
import { Jumbotron } from '../components/Jumbotron';
import "./drkimberlyduno.css";
import {Nav, Navbar, NavDropdown, Form, FormControl} from "react-bootstrap";
import { KDJumbotron } from '../components/drkimberlydunojumbo';
import {Button, form, FormGroup, Label, Input}
      from 'reactstrap';


import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';

import kimberlyImg from '../assets/kimdunno.png'


export const DrDunoPage = () => {
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
      <KDJumbotron />
        <form className="drkimberlyduno-profile-form">
            <br/>
        <Container>
            <Row>
            <Col xs={12} sm={8} smOffset={2}>
            <div className="kd-profile1">
            <img src={kimberlyImg} roundedCircle className='profile-pic-kd'/>
            
            <h1>Dr. Kimberly Duno</h1>
        <h4>Neurologist</h4>
        <p>Dr. Kimberly Duno diagnose and treat disorders that affect the brain, spinal cord, nerves and muscles of patients.
        She examines a patient’s mental and physical status, conduct medical tests and scans, and evaluate the results to
        diagnose and treat the patient. </p>
        <br/><br/>
        <h5>Neurologist duties and responsibilities</h5>
        <p>•Diagnose complex medical problems by referring to a patient’s history, examining them and conducting neurological tests. </p>
        <p>•Counsel patients on neurological disorders and its background. </p>
        <p>•Order neurological tests and interpret the results of neuroimaging studies.</p>
        <p>•Prescribe and/or administer treatment and medication.</p>
        <p>•Order supportive care services for patients. </p>
        <p>•Participate in neuroscience research activities.</p>
        <p>•Perform specialized treatments such as sleep disorders, neuroimmunology, neuro-oncology, behavioral neurology and neurogenetics.</p>
        <p>•Perform and interpret lumbar punctures, electroencephalography, electromyography and nerve conduction velocity tests.</p>
        
        </div>
        </Col>

        <Col>
        <div className="kd-copy">
        <h3>Contact Details</h3>
        <p> Email address: drkimberlyduno@mapp.com</p>
        <hr/>
        <p> Contact number: 0965 907 4728</p>
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

export default DrDunoPage;