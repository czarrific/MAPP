import React from 'react' 
import {Grid, Row, Col, Image, Button, Dropdown, DropdownButton, OverlayTrigger, Tooltip, Alert, Navbar, Nav, NavDropdown, Form, FormControl, Toast} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

import {useState} from 'react';
import DatePicker from "react-datepicker";
import "./bookmapp.css";

import edwardImg from '../assets/edwardenejosa.JPG'
import czarinaImg from '../assets/czarcamua.png'
import tinImg from '../assets/tinpacheco.png'
import debsImg from '../assets/debsgatcon.png'
import kimImg from '../assets/kimdunno.png'
import irishImg from '../assets/irishfran.png'

import { NavigationBar } from '../components/NavigationBar';
import { BMJumbotron } from '../components/bookmappjumbo';



export const BookMappPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  function AppointmentSET() {
    alert("An appointment has been set Thankyou!");
  }
  function Check() {
    alert("Check for Availble Schedule below.");
  }

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

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
      <BMJumbotron />
  
      <form className = "bookmappbg">
      <br />
      <Row>

        <div className = "bookmappcomponents">
        <div className="avt">
          <h1 className="font-weight-bold">CREATE AN APPOINTMENT</h1>
          </div>
          <h5>Category</h5>
          <DropdownButton size="lg" id="dropdown-basic-button" title="Cardiologist" variant='dark'>
  <Dropdown.Item href="#/CategoryPediatrician">Pediatrician</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/CategoryOphthalmologist">Ophthalmologist</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/CategoryObstetrician">Obstetrician</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/CategoryNeurologist">Neurologist</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/CategoryNephrologist">Nephrologist</Dropdown.Item>
</DropdownButton>
    <br/>
    <h5>Select Doctor</h5>
          <DropdownButton  size="lg" id="dropdown-basic-button" title="Dr.Edward Enejosa" variant='dark'>
  <Dropdown.Item href="#/SelectDr.CzarinaCamua">Dr.Czarina Camua</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/SelectDr.MartinPacheco">Dr.Martin Pacheco</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/SelectDr.IrishJoyceFran">Dr.Irish Joyce Fran</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/SelectDr.KimberlyDunno">Dr.Kimberly Dunno</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/SelectDr.Debbie-lynGatchon">Dr.Debbie-lyn Gatchon</Dropdown.Item>
</DropdownButton>
<br/>
    <h5>Select Date</h5>
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Check Doctors Available Schedule.</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="dark" onClick={Check}> Check</Button>
    </span>
    </OverlayTrigger>
    <br/><hr />
    <div className="avt">
     <h5 className="font-weight-bold">Available Schedules</h5>
     </div>
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">This schedule is already been booked.</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="danger" size="lg" disabled style={{ pointerEvents: 'none' }} >8:30am-9:00am</Button>
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">This schedule is already been booked.</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="danger" size="lg" disabled style={{ pointerEvents: 'none' }}>9:00am-9:30am</Button> 
    </span>
    </OverlayTrigger>
    {' '} 
    <OverlayTrigger overlay={<Tooltip id="tooltip">Available</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="success" size="lg">9:30am-10:00am</Button> 
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">This schedule is already been booked.</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="danger" size="lg" disabled style={{ pointerEvents: 'none' }}>10:00am-10:30am</Button>
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip">Available</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="success" size="lg">10:30am-11:00am</Button>
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip">Available</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="success" size="lg">11:00am-11:30am</Button> 
    </span>
    </OverlayTrigger>
    
    <br/><br/>
    <Button variant="secondary" size="lg" style={{ pointerEvents: 'none' }} block disabled>LUNCH BREAK</Button> <br/>

    <OverlayTrigger overlay={<Tooltip id="tooltip">Available</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="success" size="lg">1:00pm-1:30pm</Button>
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip">Available</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="success" size="lg">1:30pm-2:00pm</Button>
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip">Available</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="success" size="lg">2:00pm-2:30pm</Button>
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">This schedule is already been booked.</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="danger" size="lg" disabled style={{ pointerEvents: 'none' }}>2:30pm-3:00pm</Button>
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">This schedule is already been booked.</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="danger" size="lg" disabled style={{ pointerEvents: 'none' }}>3:00pm-3:30pm</Button>
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip">Available</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="success" size="lg">3:30pm-4:00pm</Button>
    </span>
    </OverlayTrigger>

    <br/><br/>
    <Button variant="secondary" size="lg" style={{ pointerEvents: 'none' }} block disabled>BREAK TIME</Button> <br/>
    
    <OverlayTrigger overlay={<Tooltip id="tooltip">Available</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="success" size="lg">5:00pm-5:30pm</Button>
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip">Available</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="success" size="lg">5:30pm-6:00pm</Button>
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">This schedule is already been booked.</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="danger" size="lg" disabled style={{ pointerEvents: 'none' }}>6:00pm-6:30pm</Button> 
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip">Available</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="success" size="lg">6:30pm-7:00pm</Button>
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip">Available</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="success" size="lg">7:00pm-7:30pm</Button>
    </span>
    </OverlayTrigger>
    {' '}
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">This schedule is already been booked.</Tooltip>}>
    <span className="d-inline-block">
    <Button variant="danger" size="lg" disabled style={{ pointerEvents: 'none' }}>7:30pm-8:00pm</Button>
    </span>
    </OverlayTrigger>
    <br/><br/>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
    <Button size='lg' variant="outline-dark" onClick={AppointmentSET}> Set an Appointment</Button>

      </div>
      </div>
      <br />
      
      </Row>
      
    </form>
    </div>
  );
};

export default BookMappPage;