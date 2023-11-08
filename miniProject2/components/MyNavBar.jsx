import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import '../styling/navBar.css';


function MyNavBar() {

    return (
        <Navbar expand="lg" className="navBarContainer">
            {/* using the bootstrap Navbar component */}
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home" className="navbaritem body px-3">Home</NavLink>
                        {/* using NavLinks here, when using bootstrap Nav.Link the context was lost when navigation occurred */}
                        <NavLink to="/search" className="navbaritem body px-3">Search</NavLink>
                        <NavLink to="/profile" className="navbaritem body px-3">Profile</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;