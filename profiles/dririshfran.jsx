import React from 'react' 
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {Col,Row, Image} from "react-bootstrap";
import {Container} from "react-bootstrap";
import { NavigationBar } from '../components/NavigationBar';
import { Jumbotron } from '../components/Jumbotron';
import {Nav, Navbar, NavDropdown, Form, FormControl} from "react-bootstrap";
import "./dririshfran.css";
import { IFJumbotron } from '../components/dririshfranjumbo';
import {Button, form, FormGroup, Label, Input}
      from 'reactstrap';

import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';

import irishImg from '../assets/irishfran.png'


export const DrFranPage = () => {
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
      <IFJumbotron />
        <form className="dririshfran-profile-form">
            <br/>
        <Container>
            <Row>
            <Col xs={12} sm={8} smOffset={2}>
            <div className="if-profile1">
            <img src={irishImg} roundedCircle className='profile-pic-if'/>
            
            <h1>Dr. Irish Joyce Fran</h1>
        <h4>Obstetrician</h4>
        <p>Dr. Irish Joyce Fran specializes in pregnancy, childbirth, and a woman's reproductive system.
        She takes care of you throughout your pregnancy, and gives you follow-up care such as annual Pap tests for years to come.</p>
        <br/><br/>
        <h5>Obstetrician duties and responsibilities</h5>
        <p>•Provide Prenatal Care. </p>
        <p>•Bring Babies Into the World. </p>
        <p>•Follow Up with Postnatal Care.</p>
        <p>•Perform Surgery Under Pressure.</p>
        <p>•Focus on Women’s Health Issues.</p>
        <p>•Serve as a Patient Educator.</p>
        <p>•Make Hospital Rounds.</p>
        <p>•Attend to Paperwork and Patient Communication.</p>
        <p>•Work Collaboratively with Others.</p>
        <p>•Serve as a Researcher.</p>
        <p>•Design Health Programs.</p>
        
        </div>
        </Col>

        <Col>
        <div className="if-copy">
        <h3>Contact Details</h3>
        <p> Email address: dririshjoycefran@mapp.com</p>
        <hr/>
        <p> Contact number: 0915 221 7346</p>
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

export default DrFranPage;