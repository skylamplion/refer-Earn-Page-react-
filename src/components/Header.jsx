import React from 'react'
import Tutedude from '../images/Tutedude.png'
import './Header.css'
import { Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';

const Header = () => {

    return (
        <>
            <Navbar expand="lg" bg="light" variant="light">
                <Image className='logo_img' src={Tutedude} alt="Tutedude" fluid />
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="navbar-nav" >
                    <Nav className="ml-auto flex-end">
                        <Nav.Link href="#">My Assignment</Nav.Link>
                        <Nav.Link href="#">Chat with Mentor</Nav.Link>

                        <NavDropdown title="Profile name" id="nav-dropdown">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Another Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Something Else</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
