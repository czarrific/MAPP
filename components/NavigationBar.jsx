import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../assets/mapp.jpg';
const Styles = styled.div`
.navbar {
    background-color: rgb(134, 192, 240);
}

.Logo{
    width: 20;
    height: 20;
}


.navbar-brand, .navbar-nav .nav-link {
    color: #000000;

&:hower {
    color: white;
}
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">

            <Navbar.Brand href="/Home"> <img src={Logo} className="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/Home"><h4>Home</h4></Nav.Link></Nav.Item>
                    <h1>|</h1>
                    <Nav.Item><Nav.Link href="/MyProfile"><h4>My Account</h4></Nav.Link></Nav.Item>
                    <h1>|</h1>
                    <Nav.Item><Nav.Link href="/BookAppointment"><h4>Book Apppointment</h4></Nav.Link></Nav.Item>
                    <h1>|</h1>
                    <Nav.Item><Nav.Link href="/ViewBookings"><h4>View Bookings</h4></Nav.Link></Nav.Item>
                    <h1>|</h1>
                    <Nav.Item><Nav.Link href="/OurDoctors"><h4>Our Doctors</h4></Nav.Link></Nav.Item>
                    <h1>|</h1>
                    <Nav.Item><Nav.Link href="/About"><h4>About</h4></Nav.Link></Nav.Item>
                    <h1>|</h1>
                    <Nav.Item><Nav.Link href="/Login"><h4>Logout</h4></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)