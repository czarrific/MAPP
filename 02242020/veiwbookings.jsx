import React from 'react' 
import {Grid, Row, Col, Image, Button, Table, Card, Navbar, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

import edwardImg from '../assets/edwardenejosa.JPG'
import czarinaImg from '../assets/czarcamua.png'
import tinImg from '../assets/tinpacheco.png'
import debsImg from '../assets/debsgatcon.png'
import kimImg from '../assets/kimdunno.png'
import irishImg from '../assets/irishfran.png'

import { NavigationBar } from '../components/NavigationBar';
import { VBJumbotron } from '../components/viewbookingsjumbo';
import "./viewbookings.css";
import { Schedule } from '@syncfusion/ej2-react-schedule';

export const ViewBookingPage = () => {
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
        <VBJumbotron />
        <form className="viewbookings-form">
          <br/>
          <Row>
          <div className="viewbookings-components">
            <div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
            <h1>*SCHEDULED APPOINTMENTS</h1></div>
          <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Appointment ID</th>
      <th>Appointment Type</th>
      <th>Doctor Name</th>
      <th>Date</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>*026188</td>
      <td>Checkup</td>
      <td>Dr. Czarina Camua</td>
      <td>June 14, 2020</td>
      <td>2:30pm-3:30pm</td>
    </tr>
    <tr>
      <td>*026190</td>
      <td>Consoltation</td>
      <td>Dr. Edward Enejosa</td>
      <td>June 14, 2020</td>
      <td>3:30pm-4:00pm</td>
    </tr>
    <tr>
      <td>*026192</td>
      <td>Checkup</td>
      <td>Dr. Irish Joyce Fran</td>
      <td>June 20, 2020</td>
      <td>8:30am-9:00am</td>
    </tr>
  </tbody>
</Table>
  <div style={{display: "flex", justifyContent: "center"}}>
    <Button size='lg' variant="outline-dark">Edit an Appointment</Button>{' '}
    <Button size='lg' variant="outline-dark">Cancel an Appointment</Button>
    </div>
</div>
        </div>

        <div className="viewbookings-components">
        <div></div><div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
        <h1>APPOINTMENT HISTORY</h1></div>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Appointment ID</th>
      <th>Appointment Type</th>
      <th>Doctor Name</th>
      <th>Date</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>024180</td>
      <td>Consoltation</td>
      <td>Dr. Edward Enejosa</td>
      <td>December 18, 2019</td>
      <td>9:30am-10:00am</td>
    </tr>
    <tr>
      <td>024184</td>
      <td>Checkup</td>
      <td>Dr. Martin Pacheco</td>
      <td>December 18, 2019</td>
      <td>10:00am-10:30am</td>
    </tr>
    <tr>
      <td>024188</td>
      <td>Consoltation</td>
      <td>Dr. Kimberly Duno</td>
      <td>January 20, 2020</td>
      <td>10:00am-10:30am</td>
    </tr>

    <tr>
      <td>025510</td>
      <td>Consoltation</td>
      <td>Dr. Edward Enejosa</td>
      <td>February 10, 2020</td>
      <td>9:30am-10:00am</td>
    </tr>
    <tr>
      <td>025515</td>
      <td>Checkup</td>
      <td>Dr. Debbie Gatchon</td>
      <td>February 10, 2019</td>
      <td>10:00am-10:30am</td>
    </tr>
    <tr>
      <td>025530</td>
      <td>Checkup</td>
      <td>Dr. Irish Joyce Fran</td>
      <td>February 14, 2020</td>
      <td>10:00am-10:30am</td>
    </tr>
  </tbody>
</Table>
        </div>
        


        </Row>
        <br/>
        </form>
        



        </div>
  );
  
};

export default ViewBookingPage;