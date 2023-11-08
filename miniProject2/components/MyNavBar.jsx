import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import '../styling/navBar.css';


function MyNavBar() {

    return (
        <Navbar expand="lg" className="navBarContainer">
            <Container>
                {/* <Navbar.Brand href="/home">Job Search Pro</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home" className="navbaritem body px-3">Home</NavLink>
                        <NavLink to="/search" className="navbaritem body px-3">Search</NavLink>
                        <NavLink to="/profile" className="navbaritem body px-3">Profile</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;