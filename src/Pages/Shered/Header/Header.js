import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { authContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
    const {user, logOut} = useContext(authContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {}) 
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div>
            <Navbar className='mb-5' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to='/' className='text-decoration-none'>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="align-items-center">
                        <>
                            {
                                user?.uid ?
                                <div className='d-flex align-items-center'>
                                    <span className='me-2 fw-bold'>{user?.displayName}</span>
                                    <Button onClick={handleLogOut}>Log Out</Button>
                                </div>
                                :
                                <div>
                                    <Link className='me-3' to='login'>Login</Link>
                                    <Link to='register'>Register</Link>
                                </div>
                            }
                            
                        </>
                        <Link eventKey={2} to="/profile">
                            {
                                user?.photoURL ?
                                <Image style={{height: '60px', width: '60px', marginLeft: '20px'}} roundedCircle src={user?.photoURL}></Image>
                                :
                                <FaUserCircle />
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav />
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;